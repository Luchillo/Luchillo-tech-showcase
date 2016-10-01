import { Component, ViewChild, ElementRef } from '@angular/core';

import { AppState } from '../../app.service';

import * as vertexShader from '../shaders/vertex-shader.glsl';
import * as fragmentShader from '../shaders/fragment-shader.glsl';

@Component({
  selector: 'webgl',
  host: {
    class: 'flex-fill-bottom'
  },
  styleUrls: [ './webgl.style.scss' ],
  templateUrl: './webgl.template.html'
})
export class WebGl {
  @ViewChild('webglPage') webglPageRef: ElementRef;
  @ViewChild('canvas') canvasRef: ElementRef;
  localState = { value: '' };

  private webglPage: HTMLDivElement;
  private canvas: HTMLCanvasElement;

  private shaderProgram: WebGLProgram;
  private webglContext: WebGLRenderingContext;
  constructor(public appState: AppState) {
  }

  ngOnInit() {
    console.log('hello `webgl` component');
    this.canvas = this.canvasRef.nativeElement;
    this.webglContext = <WebGLRenderingContext>this.canvas.getContext('webgl');

    // Destructuring rendered sizes of canvas into canvas size properties
    ({
      clientWidth: this.canvas.width,
      clientHeight: this.canvas.height
    } = this.canvas);

    this.webglContext.viewport(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
    this.webglContext.clearColor(1, 1, 1, 1);

    this.compileShader();
    this.createVertices();
    this.draw();
  }

  compileShader() {
    let vertexShaderObj = this.webglContext.createShader(this.webglContext.VERTEX_SHADER);
    this.webglContext.shaderSource(vertexShaderObj, vertexShader);
    this.webglContext.compileShader(vertexShaderObj);

    let fragmentShaderObj = this.webglContext.createShader(this.webglContext.FRAGMENT_SHADER);
    this.webglContext.shaderSource(fragmentShaderObj, fragmentShader);
    this.webglContext.compileShader(fragmentShaderObj);

    this.shaderProgram = this.webglContext.createProgram();
    this.webglContext.attachShader(this.shaderProgram, vertexShaderObj);
    this.webglContext.attachShader(this.shaderProgram, fragmentShaderObj);
    this.webglContext.linkProgram(this.shaderProgram);
    this.webglContext.useProgram(this.shaderProgram);
  }


  createVertices() {
    let coords = this.webglContext.getAttribLocation(this.shaderProgram, 'coords');
    this.webglContext.vertexAttrib3f(coords, 0, 0, 0);

    let pointSize = this.webglContext.getAttribLocation(this.shaderProgram, 'pointSize');
    this.webglContext.vertexAttrib1f(pointSize, 100);
  }

  draw() {
    this.webglContext.clear(this.webglContext.COLOR_BUFFER_BIT);
    this.webglContext.drawArrays(this.webglContext.POINTS, 0, 1);
  }
}

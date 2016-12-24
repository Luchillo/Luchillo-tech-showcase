import { Component, ViewChild, ElementRef } from '@angular/core';

import { AppState } from '../../app.service';

import { vertexShader, fragmentShader } from '../shaders';

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
    let gl = this.webglContext;
    let vertices = [
        -0.9, -0.9, 0,
         0.9, -0.9, 0,
         0.0,  0.9, 0
    ];

    let buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(vertices),
      gl.STATIC_DRAW
    );

    let coords = gl.getAttribLocation(this.shaderProgram, 'coords');
    // gl.vertexAttrib3f(coords, 0, 0, 0);
    gl.vertexAttribPointer(coords, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coords);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);


    let pointSize = gl.getAttribLocation(this.shaderProgram, 'pointSize');
    gl.vertexAttrib1f(pointSize, 100);

    let color = gl.getUniformLocation(this.shaderProgram, 'color');
    gl.uniform4f(color, 0, 1, 0, 1);
  }

  draw() {
    this.webglContext.clear(this.webglContext.COLOR_BUFFER_BIT);
    this.webglContext.drawArrays(this.webglContext.TRIANGLES, 0, 3);
  }
}

import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';

import { AppState } from '../../app.service';

@Component({
  selector: 'webgl',
  providers: [
  ],
  styleUrls: [ './webgl.style.scss' ],
  templateUrl: './webgl.template.html'
})
export class WebGlComponent implements OnInit {
  @ViewChild('canvas') public canvasRef: ElementRef;
  public localState = { value: '' };

  private canvas: HTMLCanvasElement;

  private webglContext: WebGLRenderingContext;
  constructor(public appState: AppState) {
  }

  public ngOnInit() {
    console.log('hello `webgl` component');
    this.canvas = this.canvasRef.nativeElement;

    this.webglContext = <WebGLRenderingContext> this.canvas.getContext('webgl');
    this.webglContext.viewport(0, 0, this.canvas.width, this.canvas.height);
  }
}

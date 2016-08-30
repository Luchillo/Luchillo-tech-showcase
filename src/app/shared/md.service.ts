import { Injectable } from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';
import * as showdown from 'showdown';

@Injectable()
export class MDService {
  private converter = new showdown.Converter({tasklists: true});
  constructor(private sanitizer: DomSanitizationService) {}
  makeHtml(text: string) {
    return this.sanitizer.bypassSecurityTrustHtml(this.converter.makeHtml(text));
  }
}

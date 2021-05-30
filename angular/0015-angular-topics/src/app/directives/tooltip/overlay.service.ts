import { Injectable } from '@angular/core';
import { DirectivesModule } from '../directives.module';

@Injectable()
export class OverlayService {
  private el: HTMLElement;

  constructor() {
    const el = document.createElement('div');
    el.className = 'tooltip';
    el.hidden = true;
    this.el = el;
  }

  close() {
    this.el.hidden = true;
  }

  open(el: any, text: string) {
    this.el.innerHTML = text;
    this.el.hidden = false;
    const rect = el.nativeElement.getBoundingClientRect();
    this.el.style.left = `${rect.left + 10}px`;
    this.el.style.top = `${rect.top + 10}px`;
  }

  attach(target: any) {
    target.appendChild(this.el);
  }

  detach() {
    this.el.parentNode?.removeChild(this.el);
  }
}

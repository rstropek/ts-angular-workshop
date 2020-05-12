import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { OverlayService } from './overlay.service';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  // For details see https://angular.io/docs/ts/latest/api/core/index/Input-var.html
  @Input('appTooltip') appRsTooltip: string;

  constructor(private el: ElementRef, private overlay: OverlayService) {
    // el is an Angular wrapper (for details see
    // https://angular.io/docs/ts/latest/api/core/index/ElementRef-class.html)
    this.overlay.attach(el.nativeElement);
  }

  // Note that we use the HostListener decorator to add event handlers.
  // See https://angular.io/docs/ts/latest/api/core/index/HostListener-var.html
  // for details.

  @HostListener('mouseenter')
  onMouseEnter() {
    this.overlay.open(this.el, this.appRsTooltip);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.overlay.close();
  }
}

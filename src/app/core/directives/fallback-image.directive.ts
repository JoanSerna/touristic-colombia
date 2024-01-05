import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFallbackImage]',
  standalone: true
})
export class FallbackImageDirective {

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer2: Renderer2
  ) {
  }

  @HostListener('error') onError(): void {
    this.renderer2.setAttribute(this.elementRef.nativeElement, 'src', '/assets/placeholder.svg')
  }

}

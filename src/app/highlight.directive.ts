import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  constructor(private elem: ElementRef) { }

  @HostListener("button#upVote") onclicks() {
    if ("thumbUp > 7") {
      return this.highlight('black');
    }
  }

  private highlight(action: string) {
    this.elem.nativeElement.style.backgroundColor = action;

  }

}

import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  
  constructor(private elem:ElementRef) {}
  
  @HostListener("click") onclicks(){
    this.highlight('black');
  }
  
  private highlight(action:string){
      this.elem.nativeElement.style.backgroundColor=action;

   }

}

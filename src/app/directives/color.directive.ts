import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightColor]'
})
export class ColorDirective {

  constructor(private el : ElementRef) {
    //console.log(el,"ColorDirective");
  }

  @HostListener('mouseover') mouseover(){
    this.el.nativeElement.style.backgroundColor = "#b2d732";
  }

  @HostListener('mouseout') mouseout(){
    this.el.nativeElement.style.backgroundColor = "";
  }

}

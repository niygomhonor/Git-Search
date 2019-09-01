import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDecoration]'
})
export class DecorationDirective {

  constructor(private decor:ElementRef) { }

  @HostListener("mouseenter") onmouseenter(){
    this.decorate("rgba(20,0,200,0.5)");
  }
  @HostListener("mouseleave") onmouseleave(){
this.decorate(null);
  }
  private decorate(color:string){
    this.decor.nativeElement.style.color=color;
  }
}

import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
})
export class SubrayadoDirective {
  @Input() config:any;

  @HostBinding ('class') isHover: string;

  constructor(
    private elem: ElementRef,
    private renderer:Renderer2) {

      this.config={
        colorHover:'red'
      }
      
    // console.log('se est USANDO LA DIRECTIVA');
    // elem.nativeElement.style.textDecoration= 'underline';
    this.renderer.setStyle(this.elem.nativeElement, 'text-decoration', 'underline')
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo')

    // @HostListener() onHover()
    // {
    //   this.renderer.setStyle(this.elem.nativeElement, 'color', 'green');
    // }

    // @HostListener('mouseout') onmouseout() {
    //   this.renderer.setStyle(this.elem.nativeElement, 'color', 'green');
    // // }


   }

}


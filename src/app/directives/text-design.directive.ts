import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[TextDesign]'
})
export class TextDesignDirective implements OnInit {

  constructor(private element: ElementRef) {

  }
  ngOnInit(): void {
    this.element.nativeElement.style.color = this.textColor;

    this.element.nativeElement.style.fontSize = this.textSize
    this.element.nativeElement.style.fontWeight = this.textWeight


  }
  @Input() textWeight: string = 'solid';
  @Input() textSize: string = "15px";
  @Input() textColor: string = "black";


}

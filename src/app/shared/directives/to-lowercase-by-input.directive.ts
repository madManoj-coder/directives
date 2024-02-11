import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToLowercaseByInput]'
})
export class ToLowercaseByInputDirective {

  constructor(
    private eleRef : ElementRef,
    private renderer : Renderer2
  ) { }

  @HostListener('input', ['$event'])
  onInput(eve : Event){
    // console.log(eve);
    // console.log(eve.target);
    let inputControl = eve.target as HTMLInputElement; // as is a typeCasting
    let val = inputControl.value.toLowerCase();
    inputControl.value = val;
    console.log(val);
    
  }

}

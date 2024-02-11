import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector : '[mouseCss]'
})
export class MouseCssDirective implements OnInit{
    constructor(
        private eleRef : ElementRef,
        private rendrer : Renderer2
    ){

    }

    ngOnInit(): void {
        this.rendrer.setStyle(this.eleRef.nativeElement, 'background-color', 'red')
        this.rendrer.setStyle(this.eleRef.nativeElement, 'padding', '10px')
        this.rendrer.setStyle(this.eleRef.nativeElement, 'color', '#fff')
    }

    @HostListener('mouseover')
    onMouseOver(){ // method
        this.rendrer.setStyle(this.eleRef.nativeElement, 'background-color', 'black')
    }

    @HostListener('mouseout')
    onMouseOut(){
        this.rendrer.setStyle(this.eleRef.nativeElement, 'background-color', 'red')
    }
}
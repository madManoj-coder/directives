import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector : '[advanceCss]'
})
export class AdvanceCssDirective implements OnInit{

    constructor(
        private eleRef : ElementRef,
        private rendrer : Renderer2
        ){

    }

    ngOnInit(): void {
        this.rendrer.setStyle(this.eleRef.nativeElement, 'background-color', 'hotpink')
        this.rendrer.setStyle(this.eleRef.nativeElement, 'margin-top', '30px')
        this.rendrer.setStyle(this.eleRef.nativeElement, 'padding', '10px')
        this.rendrer.setStyle(this.eleRef.nativeElement, 'color', '#fff')
        this.rendrer.setStyle(this.eleRef.nativeElement, 'border', '2px solid black') 
        // In border property we can not use color in hexacode(#000)
    }
}
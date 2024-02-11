import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector : '[testCss]'
})
export class TestCssDirective implements OnInit{
    constructor(
        private eleRef : ElementRef,
        private rendrer : Renderer2
    ){

    }

    ngOnInit(): void {
        this.rendrer.addClass(this.eleRef.nativeElement, 'alert-primary')
        this.rendrer.addClass(this.eleRef.nativeElement, 'p-4')
    }
}
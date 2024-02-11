import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector : '[basicCss]' // basicCss >> it is guest
})
export class BasicCssDirective implements OnInit {
    // private eleRef !: ElementRef >> we can also use this property outside constructor
    constructor(private eleRef : ElementRef){

    }

    ngOnInit(): void {
        console.log(this.eleRef.nativeElement);
        console.log(typeof this.eleRef.nativeElement);
        this.eleRef.nativeElement.style.backgroundColor = 'orange'
        this.eleRef.nativeElement.style.padding = '10px'
        this.eleRef.nativeElement.style.color = '#fff'
        this.eleRef.nativeElement.style.border = '2px solid #000'
    }

}
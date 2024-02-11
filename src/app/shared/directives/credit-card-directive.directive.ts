import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCreditCardDirective]'
})
export class CreditCardDirectiveDirective implements OnInit{

  constructor(
    private eleRef : ElementRef,
    private renderer : Renderer2
  ) { }

  ngOnInit(): void {
    this.createErrMsg()
  }

  @HostListener('input', ['$event'])
  validateCreditCard(eve : Event){
    let inputControl = eve.target as HTMLInputElement;
    // console.log(inputControl);
    let inputVal = inputControl.value 
    inputVal = inputControl.value.replace(/\s+/g, '')
    if(inputVal.length > 16){
      inputVal = inputVal.substring(0, 16)
    }

    if(/[^\d]/.test(inputVal)){
      inputControl.nextElementSibling?.classList.remove('d-none')
    }else{
      inputControl.nextElementSibling?.classList.add('d-none')
    }

    console.log(inputVal);
    inputVal = this.chunkedArr(inputVal);
    console.log(inputVal);

    inputControl.value = inputVal;

  }

  private chunkedArr(str : string){
    let arr : Array<string> = [];
    for (let i = 0; i < str.length; i += 4) {
      arr.push(str.slice(i, i + 4))
    }
    return arr.join(' ')
  }

  private createErrMsg(){
    let p = document.createElement('p')
    p.className = 'alert alert-danger d-none';
    p.innerHTML = 'Please enter valid card number'
    console.log(this.eleRef.nativeElement.parentNode);
    this.eleRef.nativeElement.parentNode.append(p)
  }
}

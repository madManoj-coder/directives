import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective implements OnInit{

  constructor(
    private eleRef : ElementRef
  ) { }

  ngOnInit(): void {
    // this.createEleSpan()
  }

  @HostListener('click', ['$event'])
  onClickButton(eve : Event){
    console.log(eve.target);
    let btn = eve.target as HTMLButtonElement;
    btn.nextElementSibling?.classList.toggle('show')
  }

  // @HostListener('click', ['$event'])
  // onClickSpan(eve : Event){
  //   console.log(eve.target);
  //   let spanBtn = eve.target as HTMLButtonElement;
  //   spanBtn.?.classList.toggle('show')
  // }


  // private createEleSpan(){
  //   let span = document.createElement('span');
  //   span.className = 'navbar-toggler-icon';
  //   span.innerHTML= '';
  //   console.log(this.eleRef.nativeElement.parentNode);
  //   this.eleRef.nativeElement.childNode.append(span)
  // }
}

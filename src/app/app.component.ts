import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directive';

  
}


// Q)  what is the difference between Components and Directives
// ==> Directives are of three types Component directive, Structural directive, Attribute directive
//     Component is the only directive who has its own HTML/template.

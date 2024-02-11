import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicCssDirective } from './shared/directives/basicCss.directive';
import { AdvanceCssDirective } from './shared/directives/advanceCss.directive';
import { TestCssDirective } from './shared/directives/testCss.directive';
import { MouseCssDirective } from './shared/directives/mouseCss.directive';
import { ToLowerCaseDirective } from './shared/directives/to-lower-case.directive';
import { ToLowercaseByInputDirective } from './shared/directives/to-lowercase-by-input.directive';
import { CreditCardDirectiveDirective } from './shared/directives/credit-card-directive.directive';
import { DropDownDirective } from './shared/directives/drop-down.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicCssDirective,
    AdvanceCssDirective,
    TestCssDirective,
    MouseCssDirective,
    ToLowerCaseDirective,
    ToLowercaseByInputDirective,
    CreditCardDirectiveDirective,
    DropDownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

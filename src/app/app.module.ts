import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { CardImgComponent } from './card-img/card-img.component';

@NgModule({
  exports: [
    ModalComponent
  ],
  declarations: [
    AppComponent,
    ModalComponent,
    CardImgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

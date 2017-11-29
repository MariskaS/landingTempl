import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { CardImgComponent } from './card-img/card-img.component';
import { CardComponent } from './card/card.component';

@NgModule({
  exports: [
    ModalComponent,
    CardImgComponent,
    CardComponent
  ],
  declarations: [
    AppComponent,
    ModalComponent,
    CardImgComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './service/api.service';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonService } from './service/common.service';
import { ModalDoalogBoxComponent } from './modal-doalog-box/modal-doalog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalDoalogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [ApiService, CommonService],
  bootstrap: [AppComponent],
  entryComponents: [ModalDoalogBoxComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvolaAppComponent } from './provola/provola-app/provola-app.component';
import { Provola2Component } from './provola/provola2/provola2.component';
import { Provola3Component } from './provola/provola3/provola3.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvolaAppComponent,
    Provola2Component,
    Provola3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

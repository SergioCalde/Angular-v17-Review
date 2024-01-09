import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';

// Configuración del locale de la app
import localeEsCR from '@angular/common/locales/es-CR';
import localeFrCa from '@angular/common/locales/fr-CA';

import { registerLocaleData } from "@angular/common";

registerLocaleData( localeEsCR )
registerLocaleData( localeFrCa )

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-CR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

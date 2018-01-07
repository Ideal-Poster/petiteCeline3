import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { EventsPageComponent } from './events-page/events-page.component'
;
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SplashPageComponent,
    EventsPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

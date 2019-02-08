import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DelhiComponent } from './delhi/delhi.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { BangloreComponent } from './banglore/banglore.component';
import { HyderabadComponent } from './hyderabad/hyderabad.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DelhiComponent,
    MumbaiComponent,
    BangloreComponent,
    HyderabadComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

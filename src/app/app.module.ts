import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { BoxComponent } from './box/box.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CounterComponent,
    BoxComponent,
    ColorBoxComponent,
    AddmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { BoxComponent } from './box/box.component';
import { ColorBoxComponent } from './color-box/color-box.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CounterComponent,
    BoxComponent,
    ColorBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

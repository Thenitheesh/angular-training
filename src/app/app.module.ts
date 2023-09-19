import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { BoxComponent } from './box/box.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatCardModule} from '@angular/material/card';
import { MaterialMovieuiComponent } from './material-movieui/material-movieui.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import { MobieboxComponent } from './mobiebox/mobiebox.component';
import { MovietrailerComponent } from './movietrailer/movietrailer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CounterComponent,
    BoxComponent,
    ColorBoxComponent,
    AddmovieComponent,
    WelcomeComponent,
    MaterialMovieuiComponent,
    MobieboxComponent,
    MovietrailerComponent,
    EditMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,MatIconModule,ReactiveFormsModule,HttpClientModule,
    MatButtonModule,FormsModule, MatFormFieldModule, MatInputModule,MatCardModule,MatDividerModule,MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

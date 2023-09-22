import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MaterialMovieuiComponent } from './material-movieui/material-movieui.component';
import { MobieboxComponent } from './mobiebox/mobiebox.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovietrailerComponent } from './movietrailer/movietrailer.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import {
  MatChipEditedEvent,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
@NgModule({
  declarations: [
    MaterialMovieuiComponent,
    MobieboxComponent,
    MovietrailerComponent,
    EditMovieComponent,
    AddmovieComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,

    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatChipsModule,
  ],
})
export class MoviesModule {}

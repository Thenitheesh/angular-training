import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MaterialMovieuiComponent } from './material-movieui/material-movieui.component';
import { MovietrailerComponent } from './movietrailer/movietrailer.component';

const routes: Routes = [
  { path: '', component: MaterialMovieuiComponent, pathMatch: 'full' },
  { path: 'add', component: AddmovieComponent },
  { path: ':id', component: MovietrailerComponent },
  {
    path: 'editMovie/:id',
    component: EditMovieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}

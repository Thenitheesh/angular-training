import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { CounterComponent } from './counter/counter.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialMovieuiComponent } from './material-movieui/material-movieui.component';
import { MovietrailerComponent } from './movietrailer/movietrailer.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

const routes: Routes = [
  {path:"movies/add",component:AddmovieComponent,pathMatch:'full'},
  {path:"color",component:CounterComponent,pathMatch:'full'},
  {path:"",component:WelcomeComponent},
  {path:"movies/:id",component:MovietrailerComponent},
  {path:"movies",component:MaterialMovieuiComponent,pathMatch:'full'},
  {path:"movies/editMovie/:id",component:EditMovieComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

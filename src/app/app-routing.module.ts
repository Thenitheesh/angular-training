import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { CounterComponent } from './counter/counter.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialMovieuiComponent } from './material-movieui/material-movieui.component';

const routes: Routes = [
  {path:"movies",component:AddmovieComponent,pathMatch:'full'},
  {path:"color",component:CounterComponent,pathMatch:'full'},
  {path:"",component:WelcomeComponent},
  {path:"movies/:id",component:CounterComponent},
  {path:"materialUi",component:MaterialMovieuiComponent,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

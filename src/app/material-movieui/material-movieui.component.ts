import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../profile/profile.component';

@Component({
  selector: 'app-material-movieui',
  templateUrl: './material-movieui.component.html',
  styleUrls: ['./material-movieui.component.css']
})
export class MaterialMovieuiComponent {
  movieList

  
constructor(private moviesList:MovieService){
this.movieList=this.moviesList.getmovie()
}
// editmovieDetails(index:number){

// }
removeclr(index:number){
  this.movieList.splice(index, 1);
}


}

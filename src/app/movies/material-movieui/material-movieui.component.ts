import { Component } from '@angular/core';
import { MovieService } from '../../movie.service';
import { Movie } from '../../profile/profile.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-material-movieui',
  templateUrl: './material-movieui.component.html',
  styleUrls: ['./material-movieui.component.css'],
})
export class MaterialMovieuiComponent {
  movieList: Movie[] = [];
  id: string = '';
  moviesearch=this.fb.group(
  {
    searchtext:""
  }
)
  constructor(private moviesList: MovieService, private fb:FormBuilder) {
    // this.movieList=this.moviesList.getmovie()
  }
  ngOnInit() {
    this.onloadmovie();
  }
  onloadmovie() {
    this.moviesList.getmoviefromapi().subscribe((mv) => {
      this.movieList = mv;
    });
  }

  ngDestroy() {}
  // editmovieDetails(index:number){

  // }

  // deletemoviefromapi(id:string){
  //   this.moviesList.deletemoviefromapi(id).subscribe()
  // }
  removeclr(index: number) {
    this.movieList.splice(index, 1);
  }
}

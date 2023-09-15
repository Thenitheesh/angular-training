import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movietrailer',
  templateUrl: './movietrailer.component.html',
  styleUrls: ['./movietrailer.component.css']
})
export class MovietrailerComponent {
  id
  movie:any=""
constructor(private routeurl:ActivatedRoute,private movielist:MovieService,private santizer:DomSanitizer){
const {id}=this.routeurl.snapshot.params
this.id = id;
this.movie = movielist.getmovie().find((mv) => mv.id === this.id);
this.movie.trailer = this.santizer.bypassSecurityTrustResourceUrl(
  this.movie.trailer
);
}
}

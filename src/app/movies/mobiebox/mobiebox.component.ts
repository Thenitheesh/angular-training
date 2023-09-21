import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../profile/profile.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-mobiebox',
  templateUrl: './mobiebox.component.html',
  styleUrls: ['./mobiebox.component.css'],
})
export class MobieboxComponent {
  @Input() mv: Movie = {
    id: '',
    name: '',
    poster: '',
    rating: 0,
    summary: '',
    trailer: '',
    likes:0,
    dislikes:0
  };
  @Input() index = 0;
  // @Output() deleteMovie= new EventEmitter<string>();
  // @Output() editMovie= new EventEmitter<number>();
  @Output() removeMovie = new EventEmitter();
  movieslikes: Movie[]=[]
  likes = 0;
  dislikes = 0;
  progress = 0;
  initial = 'hidden';
  dis = '';
  show = false;

  constructor(private route: Router, private movieslist: MovieService) {}

  editItem() {
    this.route.navigate([`/movies/editMovie/${this.mv.id}`]);
    console.log(this.mv);
  }

  //   getIndex(){
  //     // this.Movielist.splice(this.index,0)
  //   // this.deleteMovie.emit(this.index)
  //   this.deleteMovie.emit(this.mv.id)
  // }
  movietoggle() {
    this.show = !this.show;

    this.dis = 'block';
  }
  del() {
    this.movieslist.deletemoviefromapi(this.mv.id).subscribe(() => {
      this.removeMovie.emit();
    });
  }

  movieinfo() {
    this.route.navigate([`/movies/${this.mv.id}`]);
  }
  increment() {
    this.likes++;
    this.mv={...this.mv,likes:this.likes}
    this.movieslist.updatemoviefromapi(this.mv.id,this.mv).subscribe()
    // this.progress = (this.like / (this.dislike + this.like)) * 100;
  }
  decrement() {
    this.dislikes++;
    this.mv={...this.mv,dislikes:this.dislikes}
    this.movieslist.updatemoviefromapi(this.mv.id,this.mv).subscribe()
    // this.progress = (this.like / (this.dislike + this.like)) * 100;
  }
  // get like() {
  //   return this.like;
  // }
  // get dislikes() {
  //   return this.dislike;
  // }
}

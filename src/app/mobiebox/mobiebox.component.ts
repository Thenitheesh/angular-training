import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Movie } from '../profile/profile.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-mobiebox',
  templateUrl: './mobiebox.component.html',
  styleUrls: ['./mobiebox.component.css']
})
export class MobieboxComponent {
@Input() mv:Movie={
  id:"",
  name:"",
  poster:"",
  rating:0,
  summary:"",
  trailer:""
}
@Input() index=0
@Output() deleteMovie= new EventEmitter<string>();
// @Output() editMovie= new EventEmitter<number>();
like=0
dislike=0
progress=0
initial="hidden"
dis=""
show=false
constructor(private route:Router){

}

editItem(){
  this.route.navigate([`/movies/editMovie/${this.mv.id}`])
}

  getIndex(){
    // this.Movielist.splice(this.index,0)
  // this.deleteMovie.emit(this.index)
  this.deleteMovie.emit(this.mv.id)
}
movietoggle(){
this.show=!this.show;

this.dis="block"
}
movieinfo(){
  this.route.navigate([`/movies/${this.mv.id}`])
}
increment(){

 this.like++

 this. progress=(this.like/(this.dislike+this.like))*100
}
decrement(){
 this.dislike++
this. progress=(this.like/(this.dislike+this.like))*100
}
get likes(){
 return this.like
}
get dislikes(){
 return this.dislike
}
}

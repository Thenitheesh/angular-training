import { Component, Input } from '@angular/core';
import { Movie } from '../profile/profile.component';
import { Router } from '@angular/router';

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

like=0
dislike=0
progress=0
initial="hidden"

constructor(private route:Router){

}
movietoggle(){
  
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

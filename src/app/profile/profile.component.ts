import { Component ,EventEmitter,Input, Output} from '@angular/core';
export type Movie= {
  id:string;
  name:string;
  poster:string;
  rating:number ;
  summary:string;
  trailer:string;
  likes:Number;
  dislikes:Number
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  
  @Input() movie:Movie={poster:"",name:"",summary:"",rating:0,id:"",trailer:"",likes:0,dislikes:0}
  @Input() index:number=0
  @Output() deleteMovie= new EventEmitter<number>();


  getIndex(){
    // this.Movielist.splice(this.index,0)
  this.deleteMovie.emit(this.index)
}
// @Input() src:string=""
// @Input()  movieName:string=""
// @Input() rating:number=0
// @Input() details:string=""
}

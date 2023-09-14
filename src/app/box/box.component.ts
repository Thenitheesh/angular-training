import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
@Input() clr:string=''
@Input() index=0
@Output() deleteMovie= new EventEmitter();


  getIndex(){
    console.log(this.index)
  this.deleteMovie.emit(this.index)
}
}

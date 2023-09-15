import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
 like=0
 dislike=0
 progress=0
increment(){
  this.like++

  this. progress=(this.like/(this.dislike+this.like))*100
}
decrement(){
  this.dislike++
 this. progress=(this.like/(this.dislike+this.like))*100
}
get state(){
  if(this.like-this.dislike>=10 ){
    return true
  }
  else{
    return false
  }
}
clr="green"
colorList=['red','pink','purple']
removeclr(index:number){
  this.colorList.splice(index, 1);
}
}


  



 

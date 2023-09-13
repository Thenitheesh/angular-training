import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
@Input() src:string=""
@Input()  movieName:string=""
@Input() rating:number=0
@Input() details:string=""
}

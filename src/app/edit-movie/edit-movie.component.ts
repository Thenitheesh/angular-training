import { Component, Input } from '@angular/core';
import { Movie } from '../profile/profile.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent {
 @Input() movies:Movie[]=[]
   moviesList:Array<Movie>=[]
   perMovie:any
  itemid:string=''

  // id=this.perMovie.name
  
  
  moviesForm = this.fb.group({
    id: '',
    name: ['', [Validators.required]],
    rating: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
    poster: '',
    summary: '',
    trailer: "",
  });
  index=0
    constructor(private movieService:MovieService,private fb:FormBuilder,private router:Router,private routedata:ActivatedRoute){
  this.moviesList=this.movieService.getmovie()
  const { id } = this.routedata.snapshot.params;
  this.itemid=id
      this.perMovie=this.moviesList.find((e,c)=>{
        this.index=c;
        return e.id==this.itemid;
      })
  this.setValue()  
    }
    // ngOnInit(){
    //   this.perMovie=this.movieService.updatemoviefromapi(this.itemid,)
    // }
    setValue(){
      this.moviesForm.setValue({
        id: this.perMovie.id,
        name: this.perMovie.name,
        rating: this.perMovie.rating,
        poster: this.perMovie.poster,
        summary: this.perMovie.summary,
        trailer: this.perMovie.trailer,
      })
    }
    
    addMovie(){
  console.log(this.moviesForm.value)
      if(this.moviesForm.valid) {
        const newMovie = this.moviesForm.value;
        console.log(this.index);
        // this.movieService.updateMovie(this.index,1,newMovie as Movie);
        this.perMovie=this.movieService.updatemoviefromapi(this.itemid,newMovie as Movie).subscribe(()=>{

          this.router.navigate(['/movies']);
        })
      }}
     
  }
  

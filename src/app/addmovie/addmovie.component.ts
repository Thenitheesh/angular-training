import { Component, Input } from '@angular/core';
import { Movie } from '../profile/profile.component';
import { MovieService } from '../movie.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css'],
})
export class AddmovieComponent {
  @Input() movies: Movie[] = [];
  moviesList: Array<Movie> = [];
  moviesForm = this.fb.group({
    id: '',
    name: ['', [Validators.required]],
    rating: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
    poster: ['', [Validators.required]],
    summary: ['', [Validators.required, Validators.min(20)]],
    trailer: ['', [Validators.required, Validators.pattern('^http.*')]],
  });
  constructor(
    private movieService: MovieService,
    private fb: FormBuilder,
    private router: Router,
    private routedata: ActivatedRoute
  ) {
    this.moviesList = this.movieService.getmovie();
  }
  addMovie() {
    console.log(this.moviesForm.value);
    if (this.moviesForm.valid) {
      const newMovie = this.moviesForm.value;
      console.log(newMovie);
      // this.movieService.setmovie(newMovie as Movie);
      this.movieService.setmoviefromapi(newMovie as Movie).subscribe(() => {
        this.router.navigate(['/movies']);
      });
      // programmatically change
    }
  }
}

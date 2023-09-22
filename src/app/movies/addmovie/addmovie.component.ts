import { Component, Input } from '@angular/core';
import { Movie } from '../../profile/profile.component';
import { MovieService } from '../../movie.service';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatChipInputEvent } from '@angular/material/chips';
import { LANGUAGES, GENRES } from './global';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css'],
})
export class AddmovieComponent {
  @Input() movies: Movie[] = [];
  moviesList: Array<Movie> = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  genres=GENRES
  languages=LANGUAGES
  moviesForm = this.fb.group({
    like: 0,
    dislike: 0,
    name: ['', [Validators.required, Validators.minLength(5)]],
    featured: [false],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    releaseYear: ['', [Validators.required]],
    censorRating: ['', [Validators.required]],
    genres: [[], [Validators.required]],
    languages: [[], [Validators.required]],
    cast: this.fb.array([]),
    poster: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
    summary: ['', [Validators.required, Validators.minLength(20)]],
    trailer: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
  });
  constructor(
    private movieService: MovieService,
    private fb: FormBuilder,
    private router: Router,
    private routedata: ActivatedRoute
  ) {
    // this.moviesList = this.movieService.getmovie();
  }
  get cast() {
    return this.moviesForm.get('cast') as FormArray;
  }
  addCastName(event: MatChipInputEvent) {
    const name = (event.value || '').trim();
    if (name) {
      this.cast.push(this.fb.control(name));
    }

    event.chipInput!.clear();
  }

  removeCastName(index: number) {
    this.cast.removeAt(index);
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

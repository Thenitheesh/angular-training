import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-trainng';
 movies=[{
src:'https://wallpapercave.com/dwp1x/wp10314707.jpg',
movieName:'ramaiya vastavaiya',
rating:5,
details:`Now is the winter of our discontent
Made glorious summer by this sun of York;
And all the clouds that lour'd upon our house
In the deep bosom of the ocean buried.`

},
{
  src:'https://wallpapercave.com/dwp1x/wp6908040.jpg',
  movieName:'v',
  rating:8,
  details:`Now is the winter of our discontent
  Made glorious summer by this sun of York;
  And all the clouds that lour'd upon our house
  In the deep bosom of the ocean buried.`
  
  },
  {
    src:'https://wallpapercave.com/dwp1x/wp10314723.jpg',
    movieName:'Shadow',
    rating:6,
    details:`Now is the winter of our discontent
    Made glorious summer by this sun of York;
    And all the clouds that lour'd upon our house
    In the deep bosom of the ocean buried.`
    
    },
    {
      src:'https://wallpapercave.com/dwp1x/wp6907655.jpg',
      movieName:'Supreme',
      rating:8,
      details:`Now is the winter of our discontent
      Made glorious summer by this sun of York;
      And all the clouds that lour'd upon our house
      In the deep bosom of the ocean buried.`
      
      }]

}

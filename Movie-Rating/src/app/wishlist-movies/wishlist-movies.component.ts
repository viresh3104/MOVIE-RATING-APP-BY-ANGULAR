import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist-movies',
  templateUrl: './wishlist-movies.component.html',
  styleUrl: './wishlist-movies.component.css'
})
export class WishlistMoviesComponent {

  constructor(public movieService: MovieService,  private router: Router){

  }

  gotomoviedetails(movie:any){
    this.router.navigate(['/movie'], { queryParams: {     
      moviedetails: JSON.stringify(movie) ,
    } });
  }
}

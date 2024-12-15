import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist-movies',
  templateUrl: './wishlist-movies.component.html',
  styleUrl: './wishlist-movies.component.css',
})
export class WishlistMoviesComponent {
  constructor(public movieService: MovieService, private router: Router) {}

  viewDetailsClicked(movie: any) {
    this.router.navigate(['/movie'], {
      queryParams: {
        moviedetails: JSON.stringify(movie),
      },
    });
  }

  removewishlist(movie:any){
    this.movieService.removeWishlist(movie);
  }

  generateStars(rating: number): Array<number> {
    return Array(Math.floor(rating)).fill(0); // Array with filled stars
  }
  
  generateEmptyStars(rating: number): Array<number> {
    return Array(5 - Math.floor(rating)).fill(0); // Array for empty stars (5 is max rating)
  }
  
}

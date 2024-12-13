import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { log } from 'node:util';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allMovies: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.http
      .get<any[]>('http://localhost:4200/assets/movies_data/movieCategory.json')
      .subscribe((movies) => {
        this.allMovies = movies;
        //deep copy
        this.allMovies.forEach((movieCategory: any) => {
          movieCategory.movieList = [...movieCategory.movieList.slice(0, 8)];
        });
      });
  }

  gotomoviedetails(movie: any) {
    this.router.navigate(['/movie'], {
      queryParams: {
        moviedetails: JSON.stringify(movie),
      },
    });
  }

  saveInWishListArray(data: any) {
    const movie = data.movie_clicked; // The movie object clicked
    const isWishList = data.movie_isWishList; // The boolean value for wishlist status

    // Loop through all movie categories to find the movie in the movieList
    this.allMovies.forEach((movieCategory: any) => {
      const movieInCategory = movieCategory.movieList.find((m: any) => m.id === movie.id);

      // If the movie is found in the category, update its isWishlisted property
      if (movieInCategory) {
        movieInCategory.isWishlisted = isWishList;

        if (isWishList) {
          // Check if the movie is not already in the wishlist
          if (!this.movieService.wishListMovies.some((m: any) => m.id === movie.id)) 
          {
            this.movieService.wishListMovies.push(movie); // Add to wishlist
          }
        } else {
          // Remove the movie from the wishlist
          const index = this.movieService.wishListMovies.findIndex(
            (m: any) => m.id === movie.id
          );
          if (index !== -1) {
            this.movieService.wishListMovies.splice(index, 1); // Remove from wishlist
          }
        }
      }
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  wishListMovies: any[] = []; // Array to store wishlisted movies
  allMovies: any[] = []; // Array to store all movies fetched from JSON
  constructor(private http: HttpClient) {
    // Fetch all movies during service initialization
  }

  // Function to load all movies from the JSON file
 loadAllMovies() {
    this.http
      .get<any[]>('http://localhost:4200/assets/movies_data/movieCategory.json')
      .subscribe(
        (movies) => {
          this.allMovies = movies;
        },
        (error) => {
          console.error('Failed to load movies:', error);
        }
      );
  }

  // Function to save or remove a movie in the wishlist
  saveInWishListArray(data: any) {
    const movie = data.movie_clicked; // The movie object clicked
    const isWishList = data.movie_isWishList; // The boolean value for wishlist status

    // Loop through all movie categories to find the movie in the movieList
    this.allMovies.forEach((movieCategory: any) => {
      const movieInCategory = movieCategory.movieList.find(
        (m: any) => m.id === movie.id
      );

      // If the movie is found in the category, update its isWishlisted property
      if (movieInCategory) {
        movieInCategory.isWishlisted = isWishList;

        if (isWishList) {
          // Check if the movie is not already in the wishlist
          if (!this.wishListMovies.some((m: any) => m.id === movie.id)) {
            this.wishListMovies.push(movie); // Add to wishlist
          }
        } else {
          // Remove the movie from the wishlist
          this.removeWishlist(movie);
        }
      }
    });
  }

  removeWishlist(movie: any) {
    // Remove the movie from the wishlist
    const index = this.wishListMovies.findIndex((m: any) => m.id === movie.id);
    if (index !== -1) {
      this.wishListMovies.splice(index, 1); // Remove from wishlist
    }
  }
}

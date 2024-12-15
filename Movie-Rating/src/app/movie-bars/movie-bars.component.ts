import { Component, Input, input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-bars',
  templateUrl: './movie-bars.component.html',
  styleUrl: './movie-bars.component.css',
})
export class MovieBarsComponent {
  allMovies: any;
  movielist: any[] = [];
  category: string = '';

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private route: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.category = this.router.snapshot.paramMap.get('category')!;
    this.fetchMoviesByGonera(this.category);
  }

  fetchMoviesByGonera(category: String) {
    const wishlistIds = this.movieService.wishListMovies.map((item: any) => item.id);

    this.movieService.allMovies.forEach((movieCategory: any) => {
      if (movieCategory.category == category) {
        this.movielist = movieCategory.movieList.map((movie: any) => {
          return {
            ...movie,
            isWishlisted: wishlistIds.includes(movie.id),
          };
        });
      }
    });
  }

  gotomoviedetails(movie: any) {
    this.route.navigate(['/movie'], {
      queryParams: {
        moviedetails: JSON.stringify(movie),
      },
    });
  }

  wishlistmanage(data: any) {
    this.movielist.forEach((movie: any) => {
      if (movie.id == data?.movie_clicked?.id) {
          movie.isWishlisted = data.movie_isWishList;
      }
    });
    this.movieService.saveInWishListArray(data);
  }
}

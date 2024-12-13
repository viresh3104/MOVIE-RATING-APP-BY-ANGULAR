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
  movielist: any[] = [];
  gonera: string = '';

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private route: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.gonera = this.router.snapshot.paramMap.get('category')!;
    this.fetchMoviesByGonera(this.gonera);
  }

  fetchMoviesByGonera(gonera: string): void {
    if (gonera === 'Bollywood') {
      this.http
        .get<any[]>('http://localhost:4200/assets/movies_data/bollywood.json')
        .subscribe((movies) => {
          this.movielist = movies;
        });
    } else if (gonera === 'Hollywood') {
      this.http
        .get<any[]>('http://localhost:4200/assets/movies_data/hollywood.json')
        .subscribe((movies) => {
          this.movielist = movies;
        });
    }
  }
  gotomoviedetails(movie: any) {
    this.route.navigate(['/movie'], {
      queryParams: {
        moviedetails: JSON.stringify(movie),
      },
    });
  }

  saveInWishListArray(movie: any) {
    alert('Added to Wishlist');
    this.movieService.wishListMovies.push(movie);
  }
}

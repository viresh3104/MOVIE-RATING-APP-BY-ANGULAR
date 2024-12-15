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
  constructor(
    private http: HttpClient,
    private router: Router,
    public movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movieService.loadAllMovies();
    this.getSlicedMovies();
  }

  getSlicedMovies() {
    this.http
      // .get<any[]>('http://localhost:4200/assets/movies_data/movieCategory.json')
      // .subscribe((movies) => {
        // this.movieService.allMovies = movies;
        this.movieService.slicedMovies = JSON.parse(JSON.stringify(this.movieService.allMovies ));

        const wishlistIds = this.movieService.wishListMovies.map((item: any) => item.id); 

        this.movieService.slicedMovies.forEach((movieCategory: any) => {
          movieCategory.movieList = movieCategory.movieList.slice(0, 8).map((movie: any) => {
            return {
              ...movie,
              isWishlisted: wishlistIds.includes(movie.id) 
            };
          });
        });     
      //});
  }

  gotomoviedetails(movie: any) {
    this.router.navigate(['/movie'], {
      queryParams: {
        moviedetails: JSON.stringify(movie),
      },
    });
  }
  
// for wishlist
wishlistService(data:any)
{
  this.movieService.saveInWishListArray(data);  
}
}

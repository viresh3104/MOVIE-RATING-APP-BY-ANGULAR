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
    if(this.movieService.allMovies && this.movieService.allMovies.length == 0){
      this.movieService.loadAllMovies();
    }
    this.getSlicedMovies();
  }

  getSlicedMovies() {
        const wishlistIds = this.movieService.wishListMovies.map((item: any) => item.id); 

        this.movieService.allMovies.forEach((movieCategory: any) => {
          movieCategory.movieList = movieCategory.movieList.map((movie: any) => {
            return {
              ...movie,
              isWishlisted: wishlistIds.includes(movie.id) 
            };
          });
        });     
  }

  gotomoviedetails(movie: any) {
    console.log("this.allmoview:", this.movieService.allMovies);
    
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

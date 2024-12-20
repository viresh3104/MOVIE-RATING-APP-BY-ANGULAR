import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { log } from 'console';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  movieDetails: any;
  safeTrailerUrl: SafeResourceUrl | undefined;
  stars = Array(5).fill(0); // Create an array with 5 items for the stars
  userRating = 0;
  userRemark: any;
  userName = '';
  msg: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private movieService: MovieService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params['moviedetails']) {
        try {
          if (typeof params['moviedetails'] === 'string') {
            this.movieDetails = JSON.parse(params['moviedetails']);
          } else {
            this.movieDetails = params['moviedetails'];
          }

          if (this.movieDetails?.trailor_link) {
            this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
              this.movieDetails?.trailor_link
            );
          }
        } catch (error) {
          console.error('Error parsing movie details:', error);
        }
      }
    });
  }

  setRating(newRating: number): void {
    this.userRating = newRating;
  }

  gotospotify() {
    if (this.movieDetails?.spotifyLink) {
      window.open(this.movieDetails.spotifyLink, '_blank'); // Opens the link in a new tab
    }
  }

  watchnow(){
    if (this.movieDetails?.watchNow) {
      window.open(this.movieDetails.watchNow, '_blank'); // Opens the link in a new tab
    }
  }

  submit() {

    if (this.userName.trim().length === 0) {
      this.msg = '❗ Name is required';
    } else if (this.userRating === 0) {
      this.msg = '❗ Rating is required';
    } else {
      // Reset form
      this.userRating = 0;
      this.userRemark = '';
      this.userName = '';

      this.msg = '✔ Movie Rated';

      setTimeout(() => {
        this.msg = null;
      }, 2500);
    }






















    

    // const ratingsDetails = {
    //   userRating: this.userRating,
    //   userRemark: this.userRemark,
    //   userName: this.userName,
    // };
    // // Iterate over all categories and their movie lists to find the matching movie
    // this.movieService.allMovies.forEach((category) => {
    //   category.movieList.forEach(
    //     (movie:any) => {
    //       if (movie['id'] === this.movieDetails.id) {
    //         if(!movie['ratings']) movie['ratings']=[];
    //         movie['ratings'].push(ratingsDetails);
    //         console.log("this.movieDetails:",this.movieDetails)
    //       }
    //     }
    //   );
    // });

  }
}

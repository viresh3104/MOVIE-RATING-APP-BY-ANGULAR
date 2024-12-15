import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  movieDetails: any;
  safeTrailerUrl: SafeResourceUrl | undefined;


  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.route.queryParams.subscribe((params) => {
      console.log('params:::', params);

      if (params['moviedetails']) {
        try {
          if (typeof params['moviedetails'] === 'string') {
            this.movieDetails = JSON.parse(params['moviedetails']);
          } else {
            this.movieDetails = params['moviedetails'];
          }

          if (this.movieDetails?.trailor_link) {
            this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movieDetails?.trailor_link);
          }
        } catch (error) {
          console.error('Error parsing movie details:', error);
        }
      }
    });
  }
}

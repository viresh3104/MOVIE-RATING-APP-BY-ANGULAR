import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  movieDetails: any;

  constructor(private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['moviedetails']) {
        this.movieDetails = params['moviedetails'];
        console.log(this.movieDetails)
      }
    });
  }

}

import { Component, Input, input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
    private route: Router
  ) {}

  ngOnInit(): void {
    this.gonera = this.router.snapshot.paramMap.get('gonera')!;

    this.fetchMoviesByGonera(this.gonera);
  }

  fetchMoviesByGonera(gonera: string): void {
    if (gonera === 'bollywood') {
      this.http
        .get<any[]>('http://localhost:4200/assets/movies_data/bollywood.json')
        .subscribe((movies) => {
          this.movielist = movies;
        });
    } else if (gonera === 'hollywood') {
      this.http
        .get<any[]>('http://localhost:4200/assets/movies_data/hollywood.json')
        .subscribe((movies) => {
          this.movielist = movies;
        });
    }
  }

  gotomoviedetails(movie: any) {
    console.log(movie);
    this.route.navigate(['/movie'], { queryParams: { moviedetails: movie } });
  }
}

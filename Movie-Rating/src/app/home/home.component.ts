import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getbollywoodmovies();
  }

  bollywood_movies: any;

  getbollywoodmovies() {
    this.http
      .get('http://localhost:4200/assets/movies_data/bollywood-movies.json')
      .subscribe((movies) => {
        this.bollywood_movies = movies;
      });
  }
}

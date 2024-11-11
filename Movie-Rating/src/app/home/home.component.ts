import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getbollywoodmovies();
    this.getbollywoodfinal();
  }

  bollywood_movies: any;
  bollywood_final: any;

  getbollywoodmovies() {
    this.http
      .get<any[]>('http://localhost:4200/assets/movies_data/bollywood-movies.json')
      .subscribe((movies) => {
        this.bollywood_movies = movies.slice(0,8);
      });
  }

  getbollywoodfinal() {
    this.http
      .get<any[]>('http://localhost:4200/assets/movies_data/bollywood_final.json')
      .subscribe((movies) => {
        this.bollywood_final = movies.slice(0,8);
      });
  }
}

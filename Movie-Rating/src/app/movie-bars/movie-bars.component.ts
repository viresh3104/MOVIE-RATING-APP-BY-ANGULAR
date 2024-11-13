import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-bars',
  templateUrl: './movie-bars.component.html',
  styleUrl: './movie-bars.component.css'
})
export class MovieBarsComponent {
  constructor(private http : HttpClient) { }
  
  ngOnInit() : void{
    this.getbollywoodmovies();
  }

  bollywood_movies: any;

  getbollywoodmovies(){
    this.http
    .get<any[]>('http://localhost:4200/assets/movies_data/bollywood.json')
    .subscribe((movies) => {
      this.bollywood_movies = movies;
      });
    }
}

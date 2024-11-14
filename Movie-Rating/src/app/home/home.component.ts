import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private http: HttpClient , private router:Router) {}

  ngOnInit(): void {
    this.gethollywoodmovies();
    this.getbollywoodmovies();
  }

  hollywood_movies: any;
  bollywood_movies: any;

  gethollywoodmovies() {
    this.http
      .get<any[]>('http://localhost:4200/assets/movies_data/hollywood.json')
      .subscribe((movies) => {
        this.hollywood_movies = movies.slice(0,8);
      });
  }

  getbollywoodmovies() {
    this.http
      .get<any[]>('http://localhost:4200/assets/movies_data/bollywood.json')
      .subscribe((movies) => {
        this.bollywood_movies = movies.slice(0,8);
      });
  }

  gotomoviebars(){
    this.router.navigate(['/movie-bars']);
  }
}

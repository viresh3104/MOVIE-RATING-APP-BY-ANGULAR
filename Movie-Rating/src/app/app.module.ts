import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieBarsComponent } from './movie-bars/movie-bars.component';
import { MovieCardComponent } from './home/movie-card/movie-card.component';
import { WishlistMoviesComponent } from './wishlist-movies/wishlist-movies.component';
import { MovieSliderComponent } from './home/movie-slider/movie-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MovieComponent,
    AboutComponent,
    RegisterComponent,
    MovieBarsComponent,
    MovieCardComponent,
    WishlistMoviesComponent,
    MovieSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

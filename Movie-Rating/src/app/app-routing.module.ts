import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { MovieBarsComponent } from './movie-bars/movie-bars.component';


const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'movie', component: MovieComponent},
  {path:'about', component: AboutComponent},
  {path:'register', component: RegisterComponent},
  {path:'movie-bars/:gonera', component: MovieBarsComponent},
  {path:'**', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

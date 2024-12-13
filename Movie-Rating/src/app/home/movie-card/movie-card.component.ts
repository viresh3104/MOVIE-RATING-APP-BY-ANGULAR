import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  @Input() movieDetails: any;
  @Output() goToViewDetails = new EventEmitter<any>();
  @Output() wishListClicked = new EventEmitter<any>();

  viewDetailsClicked(movie: any) {
    this.goToViewDetails.emit(movie);
  }

  wishlistClicked(movie: any, isWishListvalue: boolean) {
    let data = {
      movie_clicked: movie,
      movie_isWishList: isWishListvalue,
    };
    this.wishListClicked.emit(data);
  }
}

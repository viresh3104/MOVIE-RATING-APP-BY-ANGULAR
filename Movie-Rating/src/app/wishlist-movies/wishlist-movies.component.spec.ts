import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistMoviesComponent } from './wishlist-movies.component';

describe('WishlistMoviesComponent', () => {
  let component: WishlistMoviesComponent;
  let fixture: ComponentFixture<WishlistMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishlistMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBarsComponent } from './movie-bars.component';

describe('MovieBarsComponent', () => {
  let component: MovieBarsComponent;
  let fixture: ComponentFixture<MovieBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieBarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

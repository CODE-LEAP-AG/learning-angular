import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardListComponent } from './movie-card-list.component';

describe('MovieCardListComponent', () => {
  let component: MovieCardListComponent;
  let fixture: ComponentFixture<MovieCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

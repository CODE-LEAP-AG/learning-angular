import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBackdropComponent } from './movie-backdrop.component';

describe('MovieBackdropComponent', () => {
  let component: MovieBackdropComponent;
  let fixture: ComponentFixture<MovieBackdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieBackdropComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

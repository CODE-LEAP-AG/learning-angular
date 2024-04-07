import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMovie } from '@share/models/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() movie: IMovie
  @Output() onMovieClick = new EventEmitter<number>()

  handleMovieClick() {
    this.onMovieClick.emit(this.movie.id)
  }
}

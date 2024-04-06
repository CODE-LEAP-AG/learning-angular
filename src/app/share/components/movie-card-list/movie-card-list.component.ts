import { Component, Input } from '@angular/core';
import { IMovie } from '@share/models/movie';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import gsap from 'gsap';

@Component({
  selector: 'app-movie-card-list',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-card-list.component.html',
  styleUrl: './movie-card-list.component.scss'
})
export class MovieCardListComponent {
  @Input() movieList: Array<IMovie>

}

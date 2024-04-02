import { Component } from '@angular/core';
import { IMovie } from '@share/models/movie';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from '@share/components';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule,VideoPlayerComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  openPlayer = false
  public topRated: IMovie = {
    "adult": false,
    "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 278,
    "original_language": "en",
    "original_title": "The Shawshank Redemption",
    "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    "popularity": 146.675,
    "poster_path": "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    "release_date": "1994-09-23",
    "title": "The Shawshank Redemption",
    "video": false,
    "vote_average": 8.706,
    "vote_count": 25885
  }
  togglePlayer(isOpen: boolean) {
    this.openPlayer= isOpen
  }
}

import { Component, OnInit } from '@angular/core';
import { IMovie } from '@share/models/movie';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from '@share/components';
import { MovieCardComponent } from '@share/components';
import { LoadingComponent } from '@share/components';
import { delay } from '@share/utils';
import { MovieBackdropComponent } from '@share/components';
import { MovieService } from '@share/services/movie/movie.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, VideoPlayerComponent, MovieCardComponent, LoadingComponent, MovieBackdropComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  openPlayer = false
  loading = true
  public topRated: IMovie
  public topRatedList: Array<IMovie> = []
  public popularList: Array<IMovie> = []
  public upcomingList: Array<IMovie> = []
  constructor(private movieService: MovieService) { }
  async ngOnInit(): Promise<void> {
    try {
      this.loading = true
      await delay(3000)
      await Promise.all([this.movieService.getPopularMovies(1), this.movieService.getTopRatedMovie(1), this.movieService.getUpComingMovie(1)]).then(resp => {
        this.popularList = resp[0] ?? []
        this.topRatedList = resp[1] ?? []
        this.upcomingList = resp[2] ?? []
        this.topRated = this.popularList[Math.floor(Math.random() * 6)]
      })
    } catch (error) {
      console.log("Error in get movie: ", error)
    } finally {
      this.loading = false
    }
  }

  togglePlayer(isOpen: boolean) {
    this.openPlayer = isOpen
  }
}

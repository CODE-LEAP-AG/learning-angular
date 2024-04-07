import { Component, OnInit } from '@angular/core';
import { IMovie, IMovieDetail } from '@share/models/movie';
import { CommonModule } from '@angular/common';
import { LoadingComponent, AboutComponent, MovieCardComponent, VideoPlayerComponent, MovieBackdropComponent, LoadingPopupComponent } from '@share/components';
import { delay } from '@share/utils';
import { MovieService } from '@share/services/movie/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, VideoPlayerComponent, MovieCardComponent, LoadingComponent, MovieBackdropComponent, AboutComponent, LoadingPopupComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  openPlayer = false
  loading = true
  movieDetailLoading = false
  public topRated: IMovie
  public showDetailPopup = false
  public movieDetails: IMovieDetail
  public topRatedList: Array<IMovie> = []
  public popularList: Array<IMovie> = []
  public upcomingList: Array<IMovie> = []

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }
  async ngOnInit(): Promise<void> {
    try {
      this.loading = true
      await delay(3000)
      const resp = await Promise.all([this.movieService.getPopularMovies(1), this.movieService.getTopRatedMovie(1), this.movieService.getUpComingMovie(1)])
      this.popularList = resp[0] ?? []
      this.topRatedList = resp[1] ?? []
      this.upcomingList = resp[2] ?? []
      this.topRated = this.popularList[Math.floor(Math.random() * 6)]

      this.route.queryParamMap.subscribe(params => {
        if (params.get('approved') === 'true') {
          this.movieService.handleGetSession()
        }
      })

    } catch (error) {
      console.log("Error in get movie: ", error)
    } finally {
      this.loading = false
    }
  }
  handleLogin() {
    this.movieService.handlerRequestToken()
  }

  togglePlayer(isOpen: boolean) {
    this.openPlayer = isOpen
  }
  async handleMovieDetails(id: number) {
    if (this.movieDetailLoading) {
      return
    }
    this.showDetailPopup = true
    this.movieDetailLoading = true
    try {
      this.movieDetails = await this.movieService.getMovieDetails(id)
    } catch (error) {
      console.log("get movie detail error", error)
    } finally {
      this.movieDetailLoading = false
    }
  }
}

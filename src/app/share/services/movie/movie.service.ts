import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { IMovie, IMovieDetail, IMovieResp } from '@share/models/movie';
import { lastValueFrom } from 'rxjs';
interface IRequestTokenResp {
  expires_at: string,
  request_token: string,
  success: boolean
}
interface ISession {
  session_id: string,
  success: boolean
}
@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private apiClient: HttpClient) {
    this.tmdbUrl = environment.tmdbUrl
  }
  popularTotalPage: number | undefined
  tmdbUrl: string



  async getPopularMovies(page: number) {
    if (this.popularTotalPage && page >= this.popularTotalPage) {
      return
    }
    const resp = await lastValueFrom(this.apiClient.get<IMovieResp>(`${this.tmdbUrl}/movie/popular?language=en-US&page=${page}`))
    this.popularTotalPage = resp.total_pages
    return resp.results
  }
  async getUpComingMovie(page: number) {

    const resp = await lastValueFrom(this.apiClient.get<IMovieResp>(`${this.tmdbUrl}/movie/popular?upcoming=en-US&page=${page}`))
    return resp.results
  }
  async getTopRatedMovie(page: number) {

    const resp = await lastValueFrom(this.apiClient.get<IMovieResp>(`${this.tmdbUrl}/movie/top_rated?language=en-US&page=${page}`))
    return resp.results
  }
  async handlerRequestToken() {
    const resp = await lastValueFrom(this.apiClient.get<IRequestTokenResp>(`${this.tmdbUrl}/authentication/token/new`))
    console.log("resp", resp.request_token)
    if (resp && resp.success) {
      window.sessionStorage.setItem("requestToken", JSON.stringify(resp))
      window.location.href = `https://www.themoviedb.org/authenticate/${resp.request_token}?redirect_to=http://localhost:4200/projects/movies`
    }
  }
  async getMovieDetails(movieId: string) {
    const resp = await lastValueFrom(this.apiClient.get<IMovieDetail>(`${this.tmdbUrl}/movie/${movieId}`))
    return resp
  }
  async handleGetSession() {
    const sessionStorage = window.localStorage.getItem('session_id') ?? undefined
    if (sessionStorage && (JSON.parse(sessionStorage) as ISession).session_id) {
      return
    }

    const requestToken: IRequestTokenResp = JSON.parse(window.sessionStorage.getItem('requestToken') ?? '')
    if (requestToken && requestToken.success) {

      const resp = await lastValueFrom(this.apiClient.post<ISession>(`${this.tmdbUrl}/authentication/session/new`, JSON.stringify({
        request_token: requestToken.request_token
      }), {
        headers: {
          accept: 'application/json', 'content-type': 'application/json'
        }
      }))
      if (resp.success && resp.session_id) {
        window.localStorage.setItem("session_id", JSON.stringify(resp))
      }
    }
  }
}

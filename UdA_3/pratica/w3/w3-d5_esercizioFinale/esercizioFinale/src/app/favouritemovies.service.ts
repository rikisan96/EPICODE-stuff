import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovies } from './interface/i-movies';
import { IFavouriteMovies } from './interface/i-favourite-movies';

@Injectable({
  providedIn: 'root'
})
export class favouriteMoviesService {

  apiURL:string = 'http://localhost:3000/favourites'

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    return this.http.get<IFavouriteMovies[]>(this.apiURL)
  }

  getById(id:number){
    return this.http.get<IFavouriteMovies>(`${this.apiURL}/${id}`)
  }

  getFavouriteByMovieId(movieId:number){
    return this.http.get<IFavouriteMovies[]>(`${this.apiURL}?movieId=${movieId}`)
  }

  create(newMovie:Partial<IFavouriteMovies>){
    return this.http.post<IFavouriteMovies>(this.apiURL, newMovie)
  }

  delete(id:number){
    return this.http.delete(`${this.apiURL}/${id}`)
  }

}


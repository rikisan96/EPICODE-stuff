import { HttpClient } from '@angular/common/http';
import { Injectable, importProvidersFrom } from '@angular/core';
import { IMovies } from './interface/i-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

apiURL:string = "http://localhost:3000/"
apiURLUser:string =  "http://localhost:3000/user"
apiURLMovies:string =  "http://localhost:3000/movies"
apiURLFavourites:string =  "http://localhost:3000/favourites"

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    return this.http.get<IMovies[]>(this.apiURL)
  }

  getById(id:number){
    return this.http.get<IMovies>(`${this.apiURL}/${id}`)
  }

  create(newMovie:Partial<IMovies>){
    return this.http.post<IMovies>(this.apiURL, newMovie)
  }

  update(movie:IMovies){
    return this.http.put(`${this.apiURL}/${movie.id}`,movie)
  }

  delete(id:number){
    return this.http.delete(`${this.apiURL}/${id}`)
  }


}

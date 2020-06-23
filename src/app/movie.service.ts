
import { HttpClient } from "@angular/common/http"
import { Injectable, Input } from '@angular/core';
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public _HttpClient: HttpClient) {

  }

  getMovies(): Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=4345b0b55e87114c25348987f392498f")
  }
}

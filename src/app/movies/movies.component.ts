import { Component, OnInit } from '@angular/core';
import { MovieService } from "../movie.service"


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movieData: any[] = []
  dUrl: any = "https://image.tmdb.org/t/p/original"

  constructor(_MovieService: MovieService) {
    _MovieService.getMovies().subscribe((data) => { this.movieData = data.results }, (err) => { console.log(err) })
  }

  ngOnInit(): void {
  }

}

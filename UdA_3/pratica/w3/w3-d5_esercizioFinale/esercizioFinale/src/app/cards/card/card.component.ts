import { Component, OnInit, input } from '@angular/core';
import { IMovies } from '../../interface/i-movies';
import { MovieService } from '../../movies.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  movies: IMovies[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAll().subscribe(data => {
      this.movies = data;
    });
  }
}

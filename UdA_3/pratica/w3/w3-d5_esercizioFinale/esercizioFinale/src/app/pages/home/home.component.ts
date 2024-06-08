import { Component } from '@angular/core';
import { MovieService } from '../../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private $movies: MovieService) { }

  movies = this.$movies.getAll()

}

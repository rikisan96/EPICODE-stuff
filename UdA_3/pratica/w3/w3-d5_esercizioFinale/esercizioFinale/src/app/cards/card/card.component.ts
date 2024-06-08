import { Component, Input } from '@angular/core';
import { IMovies } from '../../interface/i-movies';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() movie?: IMovies
}

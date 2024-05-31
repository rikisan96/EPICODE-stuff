import { Component, Input } from '@angular/core';
import { iTodos } from '../../interface/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

  @Input() todos!: iTodos;
}

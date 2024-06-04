import { Component, Input } from '@angular/core';
import { iUsers } from '../../interface/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  @Input() user!: iUsers[];
}

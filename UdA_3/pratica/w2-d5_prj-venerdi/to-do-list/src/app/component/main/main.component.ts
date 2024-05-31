import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { TodosService } from '../../services/todos.service';
import { iUsers } from '../../interface/users';
import { iTodos } from '../../interface/todos';
import { Combinazione } from '../../interface/combinazione';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  usersArr: iUsers[] = []
  todosArr: iTodos[] = []

  constructor(private toDoSvc: TodosService, private userSvc: UsersService) { }

  ngOnInit() {
    this.todosArr = this.toDoSvc.todoArr
    this.usersArr = this.userSvc.users
  }


  getUserbyID(usrID: number): iUsers | undefined {
    return this.usersArr.find(usr => usr.id === usrID)
  }

}

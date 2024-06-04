import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { TodosService } from '../../services/todos.service';
import { iUsers } from '../../interface/users';
import { iTodos } from '../../interface/todos';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  map: {
    [key: string]: {
      name: string,
      img: string,
      todo: iTodos[]
    }
  } = {}


  usersArr: iUsers[] = []
  todosArr: iTodos[] = []
  comboUsrTodo: any;

  constructor(public $toDo: TodosService, public $users: UsersService) { }

  ngOnInit() {
    combineLatest([
      this.$toDo.getToDos(),
      this.$users.getUsers()
    ]).subscribe(([t, u]) => {
      this.todosArr = t
      u.forEach(user => {
        this.map[user.id] =
        {
          name: user.firstName,
          img: user.image,
          todo: t.filter(f => f.userId == user.id)
        }
      })
      this.usersArr = u
      this.comboUsrTodo = Object.values(this.map)
      console.log(this.comboUsrTodo)
    })

  }

  getUserbyID(usrID: number): iUsers | undefined {
    return this.usersArr.find(usr => usr.id === usrID)
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iTodos } from '../interface/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private $http: HttpClient) { }

  getToDos() {
    return this.$http.get<iTodos[]>("http://localhost:3000/to-do")
  }
}

import { Injectable } from '@angular/core';
import { iUsers } from '../interface/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private $http: HttpClient) { }

  getUsers() {
    return this.$http.get<iUsers[]>('http://localhost:3000/users')
  }
}

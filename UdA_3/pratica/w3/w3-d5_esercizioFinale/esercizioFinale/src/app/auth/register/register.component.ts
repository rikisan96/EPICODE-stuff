import { Component } from '@angular/core';
import { iUser } from '../../interface/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  newUser: Partial<iUser> = {}

  constructor(private $auth: AuthService) { }

  register() {
    this.$auth.register(this.newUser).subscribe(() => {
      //avviso o redireziono l'utente
    })
  }

}

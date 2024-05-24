import { Component } from '@angular/core';
import { car } from '../../Models/cars';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss',
})
export class FordComponent {
  carArray: car[] = [];

  async ngOnInit() {
    this.getCars();
  }

  async getCars() {
    const response = await fetch('../assets/db.json');
    const cars = await response.json();
    console.log(cars);
    //devo riempire array di cars
    this.carArray = cars;
  }
}

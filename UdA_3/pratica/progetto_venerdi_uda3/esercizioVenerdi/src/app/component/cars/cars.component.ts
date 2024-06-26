import { Component, Input } from '@angular/core';
import { car } from '../../Models/cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent {
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMovies } from '../../interface/i-movies';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from '../../cards/card/card.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

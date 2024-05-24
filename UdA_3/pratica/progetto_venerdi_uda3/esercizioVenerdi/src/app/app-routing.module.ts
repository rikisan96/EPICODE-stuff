import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { PageNotFound404Component } from './component/page-not-found404/page-not-found404.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { AudiComponent } from './pages/audi/audi.component';
import { FordComponent } from './pages/ford/ford.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,

  },
  {
    path: 'pages/fiat',
    component: FiatComponent,
    title: "fiat"
  },
  {
    path: 'pages/audi',
    component: AudiComponent,
    title : "audi"
  },
  {
    path: 'pages/ford',
    component: FordComponent,
    title : "ford"
  },
  {
    path: '**',
    component: PageNotFound404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { PageNotFound404Component } from './component/page-not-found404/page-not-found404.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
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

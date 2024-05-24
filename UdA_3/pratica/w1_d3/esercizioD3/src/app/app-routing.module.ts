import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ActivePostComponent } from './component/active-post/active-post.component';
import { InactivePostComponent } from './component/inactive-post/inactive-post.component';
import { PageNotFound404Component } from './component/page-not-found404/page-not-found404.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'active-post', component: ActivePostComponent},
  {path: 'navbar', component:NavbarComponent },
  {path: 'inactive-post', component: InactivePostComponent},
  {path: '**', component: PageNotFound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

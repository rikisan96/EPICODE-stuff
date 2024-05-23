import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ActivePostComponent } from './component/active-post/active-post.component';
import { InactivePostComponent } from './component/inactive-post/inactive-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'active-post', component: ActivePostComponent },
  { path: 'inactive-post', component: InactivePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

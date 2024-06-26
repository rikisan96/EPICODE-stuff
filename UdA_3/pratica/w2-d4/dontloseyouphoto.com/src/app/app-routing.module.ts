import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPhotosComponent } from './pages/add-photos/add-photos.component';
import { MainComponent } from './component/main/main.component';
const routes: Routes = [

  {
    path: '',
    component: MainComponent
  },
  {
    path: 'add-photos',
    component: AddPhotosComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

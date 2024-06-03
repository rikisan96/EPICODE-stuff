import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivePostsComponent } from 'src/app/active-posts/active-posts.component';
import { InactivePostsComponent } from 'src/app/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from 'src/app/post-detail/post-detail.component';
import { SinglePostComponent } from 'src/app/single-post/single-post.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ActivePostsComponent,
    InactivePostsComponent,
    PostDetailComponent,
    SinglePostComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    PostsModule
  ]
})
export class PostsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PostComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'posts/:id',
        component: PostComponent,
      }
    ])
  ],
})
export class PostsModule { }

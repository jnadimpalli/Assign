import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from "../components/posts/post/post.component";
import { PostsComponent } from '../components/posts/posts/posts.component';
import { RouterModule } from '@angular/router';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthGuard } from '../auth.guard';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
   
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      {
        path: 'posts',
        component: PostsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'posts/:id',
        component: PostComponent,
        canActivate: [AuthGuard],
      }
    ])
  ],
  providers: [AuthGuard],
})
export class PostsModule { }

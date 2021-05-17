import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { AlbumResolver } from './album.resolver';
import { AlbumService } from './album.service';



@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'albums',
        component: AlbumsComponent,
      },
      {
        path: 'albums/:id',
        component: AlbumComponent,
        resolve: {
          photos: AlbumResolver,
        }
      }
    ])
  ],
  providers: [AlbumResolver, AlbumService],
})
export class AlbumsModule { }

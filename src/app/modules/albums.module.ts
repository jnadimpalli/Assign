import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsComponent } from '../components/albums/albums/albums.component';
import { AlbumComponent } from '../components/albums/photo/album.component';
import { AlbumResolver } from '../components/albums/resolver/album.resolver';
import { AlbumService } from '../components/albums/service/album.service';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
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

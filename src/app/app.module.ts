import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GeocolorDirective } from './geocolor.directive';
import { UserComponent } from './components/user/user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { PostsModule } from './modules/posts.module';
import { AlbumsModule } from './modules/albums.module';
import { NewUserComponent } from './components/new-user/new-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    GeocolorDirective,
    UserComponent,
    EditUserComponent,
    NavbarComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    PostsModule,
    AlbumsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'main',
        component: MainComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'editUser',
        component: EditUserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'newUser',
        component: NewUserComponent,
      },
      {
        path: 'posts',
        loadChildren: () => import('./modules/posts.module').then(m => m.PostsModule),
      },
      {
        path: 'albums',
        loadChildren: () => import('./modules/albums.module').then(m => m.AlbumsModule),
      },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AppModule { }

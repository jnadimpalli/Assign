import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './User';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  edit(value) {
    this.auth.setLoggedIn(true);
    this.router.navigateByUrl('/editUser', { state: { userData: value } });
  }

}

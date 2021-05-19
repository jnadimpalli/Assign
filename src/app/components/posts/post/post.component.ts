import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../model/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(private router: Router) { 
    this.post = this.router.getCurrentNavigation().extras.state.data;
  }

  ngOnInit(): void {
    console.log(this.post);
  }

}

import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  // providers: [PostService] // dependency injection
})
export class PostComponent implements OnInit {
  posts: Array<any>;

  constructor(private postService: PostService) {
    // let postService = new PostService()
    this.posts = postService.postList;
  }
  ngOnInit(): void {}
}

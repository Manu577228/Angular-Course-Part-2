import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  // providers: [PostService]   // dependency injection 
})
export class PostListComponent {

  postList: Array<any>;
  constructor(private postService: PostService) {
    this.postList = postService.postList
  }

  ngOnInit(): void {

  }

}

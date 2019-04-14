import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postList: Array<any>;
  postListSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    // Subscription to the post service
    this.postListSubscription = this.postService.postsSubject.subscribe(
      (posts: Array<Post>) => {
        this.postList = posts;
    });

    this.postService.getPosts();
  }

}

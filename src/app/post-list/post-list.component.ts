import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  /** List of posts to display */
  postList: Array<Post>;

  /** `rxjs.Subscription` to the list of posts provided by the service [[PostService]]. */
  postListSubscription: Subscription;

  /**
   * @param postService Injection of the service [[PostService]]
   */
  constructor(private postService: PostService) { }

  /**
   * When the component `post-list` initializes it does:
   * * subscribe to the list of posts provided by the service [[PostService]]
   * * get the list of posts from the service [[PostService]]
   */
  ngOnInit() {
    // Subscription to the post service
    this.postListSubscription = this.postService.postsSubject.subscribe(
      (posts: Array<Post>) => {
        this.postList = posts;
    });

    this.postService.getPosts();
  }

    /** Unsubscribe to the `rxjs.Subscription` *postsSubject* provided by [[PostService]] on destruction */
    ngOnDestroy() {
      this.postListSubscription.unsubscribe();
    }

}

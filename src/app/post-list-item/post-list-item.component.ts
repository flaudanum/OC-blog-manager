import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() num: number;

  /** Date of creation of the post */
  private postDate: Date;

  constructor(private postService: PostService) { }

  /**
   * When the component `post-list-item` is initialized it makes a conversion of the `string` used for storing the date of creation of the post.
   */
  ngOnInit() {
    this.postDate = new Date(this.post.createdAt);
  }

  /** **Increases** the *Like* counter */
  onLoveIt(): void {
    this.post.loveIts++;
    this.postService.savePosts();
  }

  /** **Decreases** the *Like* counter */
  onDontLoveIt(): void {
    this.post.loveIts--;
    this.postService.savePosts();
  }

  /** Send a request to [[PostService]] for removing the post from the database */
  onDelete(): void {
    this.postService.removePost(this.num);
  }

  /** Display the resulting score of approval of the post */
  displayLoveItScore(): string {
    if (this.post.loveIts >= 0) {
      return this.post.loveIts.toString() + ' 👍';
    }
    else {
      return -this.post.loveIts.toString() + ' 👎';
    }
  }

}

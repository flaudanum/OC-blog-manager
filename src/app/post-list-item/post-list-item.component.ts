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

  private postDate: Date;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postDate = new Date(this.post.createdAt);
  }

  onLoveIt(): void {
    this.post.loveIts++;
    this.postService.savePosts();
  }

  onDontLoveIt(): void {
    this.post.loveIts--;
    this.postService.savePosts();
  }

  onDelete(): void {
    this.postService.removePost(this.num);
  }

  displayLoveItScore(): string {
    if (this.post.loveIts >= 0) {
      return this.post.loveIts.toString() + ' 👍';
    }
    else {
      return -this.post.loveIts.toString() + ' 👎';
    }
  }

}

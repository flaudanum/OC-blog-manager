import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  private postDate: Date;

  constructor() { }

  ngOnInit() {
    this.postDate = new Date(this.post.createdAt);
  }

  onLoveIt(): void {
    this.post.loveIts++;
  }

  onDontLoveIt(): void {
    this.post.loveIts--;
  }

}

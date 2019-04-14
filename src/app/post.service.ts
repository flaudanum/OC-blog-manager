import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

import { Post } from './models/post';
import { log } from 'util';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  databaseRef = '/posts';
  posts: Array<Post> = [];
  postsSubject = new Subject<Array<Post>>();

  constructor() {
    this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    firebase.database().ref(this.databaseRef).on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(num: number) {
    this.posts.splice(num, 1);
    this.savePosts();
    this.emitPosts();
  }

  savePosts() {
    firebase.database().ref(this.databaseRef).set(this.posts);
  }
}

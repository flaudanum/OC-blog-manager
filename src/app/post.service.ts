import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

import { Post } from './models/post';


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

  /** Send the value of the attribute `posts` to every subscription (`rxjs.Subscription`) */
  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  /** Send a **get value** request to the firebase database at location `/posts` */
  getPosts() {
    firebase.database().ref(this.databaseRef).on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  /**
   * Append a [[Post]] instance to the list of posts, save the list of posts in the database and emit the new list to subscriptions.
   *
   * @param newPost post to be recorded
   */
  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  /**
   * Remove the [[Post]] instance of the list of posts at position *number*, save the list of posts in the database and emit the new list to subscriptions.
   *
   * @param num position of the post to be removed
   */
  removePost(num: number) {
    this.posts.splice(num, 1);
    this.savePosts();
    this.emitPosts();
  }

  /**
   * Send a *set* request to the firebase database at location `/posts` for saving the list of posts
   */
  savePosts() {
    firebase.database().ref(this.databaseRef).set(this.posts);
  }
}

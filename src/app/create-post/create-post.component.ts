import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../models/post';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  private newPostForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router) { }

  /** Initialize the form */
  ngOnInit() {
    this.newPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      'post-content': ''
    });
  }

  /** Send a request to the service [[PostService]] to save new post in the *realtime* database of the Firebase backend  */
  onSavePost() {
    const title = this.newPostForm.get('title').value;
    const content = this.newPostForm.get('post-content').value;

    const newPost = new Post(title, content);

    this.postService.createNewPost(newPost);

    // Clear the form
    // this.newPostForm.reset();

    this.router.navigate(['/posts']);
  }

}

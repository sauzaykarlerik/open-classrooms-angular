import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from 'src/objects/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html'
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const post = new Post(title, content);
    this.postsService.createNewPost(post);
    this.router.navigate(['/posts']);
  }
}

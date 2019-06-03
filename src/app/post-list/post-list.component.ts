import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from 'src/objects/post';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[];
  postSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}

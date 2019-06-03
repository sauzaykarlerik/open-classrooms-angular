import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/objects/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html'
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  @Input() postIndex: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLove() {
    this.postsService.lovePost(this.postIndex);
  }

  onHate() {
    this.postsService.hatePost(this.postIndex);
  }

  onDelete() {
    this.postsService.removePost(this.postIndex);
  }
}

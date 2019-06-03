import { Injectable } from '@angular/core';
import { Post } from 'src/objects/post';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable()
export class PostsService {
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts').on('value', (posts: any) => {
      this.posts = posts.val() ? posts.val() : [];
      this.emitPosts();
    });
  }

  getSinglePost(id: number) {
    return new Promise((resolve, reject) => {
      firebase.database().ref('/posts/' + id).once('value').then(
        (post: any) => {
          resolve(post.val());
        },
        (e: Error) => {
          reject(e);
        });
    });
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.saveAndEmitPosts();
  }

  removePost(postIndex: number) {
    this.posts.splice(postIndex, 1);
    this.saveAndEmitPosts();
  }

  lovePost(postIndex: number) {
    this.posts[postIndex].loveIts++;
    this.saveAndEmitPosts();
  }

  hatePost(postIndex: number) {
    this.posts[postIndex].loveIts--;
    this.saveAndEmitPosts();
  }

  saveAndEmitPosts() {
    this.savePosts();
    this.emitPosts();
  }

  findPostIndex(post: Post): number {
    return this.posts.findIndex((postEl: Post) => {
      if (postEl === post) {
        return true;
      }
    });
  }
}

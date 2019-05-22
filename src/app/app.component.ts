import { Component } from '@angular/core';
import { Post } from 'src/objects/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[];

  constructor() {
    this.posts = [
      new Post('First post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac turpis in justo scelerisque.'),
      new Post('Second post', 'Vestibulum finibus elementum magna, vel ultrices purus accumsan id. Duis eu lobortis nisi.'),
      new Post('Third post', 'Proin tortor dui, rutrum ut ultricies non, egestas in dui. Praesent fringilla nunc ac massa.')
    ];
  }
}

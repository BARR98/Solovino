import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../core/Services/Posts/posts.service';
@Component({
  selector: 'app-home-public-component',
  templateUrl: './home-public-component.component.html',
  styleUrls: ['./home-public-component.component.css']
})
export class HomePublicComponentComponent implements OnInit {

  posts: any;

  constructor(
    public postService: PostsService,

  ) { }

  ngOnInit(): void {
    this.postService.getAllPosts()
    .subscribe(getedPosts => {
      this.posts = getedPosts
      console.log(this.posts)
      

    });
  }

}

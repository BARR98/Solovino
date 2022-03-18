import { Injectable } from '@angular/core';
import { Post } from '../../Models/Posts/post';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = 'http://localhost:3000/api/huellitas/posts'
  post: any
  posts: Post[] = []
  
  constructor(private http: HttpClient){
    this.post = this.post,
    this.posts = new Array()
   }

  getAllPosts() {
    return this.http.get(this.url);
  }

  getPost(_id: string) {
    return this.http.get(this.url + '/' + _id);
  }

  createPost(post: Post) {
    return this.http.post(this.url, post);
  }


  updatePost(_id: string , post: Post) {
    return this.http.put(this.url + '/' + _id, post);
  }

  deletePost(_id: string) {
    return this.http.delete(this.url + '/' + _id);
  }
}

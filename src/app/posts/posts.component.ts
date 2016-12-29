import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service'
@Component({
  selector: 'post',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  showImage = false;
  PickedProduct = [];
  pickAllPro = false;
  constructor(private _postService: PostService) { }
  private posts: any = [];
  ngOnInit() {
    this._postService.getAllPosts()
      .subscribe(posts => {
        this.posts = posts;
        console.log(posts);
    });
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  pickAll(): void {
    this.pickAllPro = !this.pickAllPro;
  }
  onChange(id, isPick): void {
    if (isPick) {
      this.PickedProduct.push(id);
    }
    else {
      for (var i = this.PickedProduct.length - 1; i >= 0; i--) {
        if (this.PickedProduct[i] === id) {
          this.PickedProduct.splice(i, 1);
        }
      }
    }
  }
  deleteMulti():void {
    this.PickedProduct.forEach(element => {
      this._postService.DeletePost(element.id).subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
    });
  }
  Delete(id){
    this._postService.DeletePost(id).subscribe(posts => {
      this.posts = posts;
    });
  }
}

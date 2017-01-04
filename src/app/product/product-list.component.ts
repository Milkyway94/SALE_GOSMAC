import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'post',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  showImage = false;
  PickedProduct = [];
  pickAllPro = false;
  constructor(private _postService: ProductService) { }
  private posts: any = [];
  private router: Router;
  public keyword: string;
  ngOnInit() {
    this._postService.getAllPosts()
      .subscribe(posts => {
        this.posts = posts;
        console.log(posts);
      });
    this.LoadData();
  }
  Search() {
    this._postService.Search(this.keyword)
      .subscribe((res: any) => {
        this.posts = res;
        console.log(res);
      }, error => {
        console.log(error);
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
  deleteMulti(): void {
    this.PickedProduct.forEach(element => {
      this._postService.Delete(element.id).subscribe(posts => {
        this.posts = posts;
        console.log(posts);
      });
    });
  }
  Delete(id: number) {
    let confirmResult = confirm("Bạn có chắc chắn xóa sản phẩm?");
    if (confirmResult) {
      this._postService.Delete(id)
        .subscribe(res => {
          if (res) {
            alert('Xóa thành công!');
          }
        });
    }
  }
  LoadData() {
    this._postService.getAllPosts()
      .subscribe(res => {
        this.posts = res;
        console.log(res);
      }, error => {
        console.log(error);
      });
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.posts.id]);
  }
}

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
  constructor(private _postService: ProductService,  private router: Router) { }
  private posts: any = [];
  public keyword: string;
  public SearchResult:any=[];
  title: string = "Kho hàng";
  ngOnInit() {
    this._postService.getAllPosts()
      .subscribe(posts => {
        this.posts = posts;
        console.log(posts);
      });
    this.LoadData();
  }
  Search() {
   this.SearchResult=this.posts.filter(o=>o.P_Name.includes(this.keyword));
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
  // deleteMulti(): void {
  //   this.PickedProduct.forEach(element => {
  //     this._postService.Delete(element.id).subscribe(posts => {
  //       this.posts = posts;
  //       console.log(posts);
  //     });
  //   });
  // }
  Delete(id: string) {
    let confirmResult = confirm("Bạn có chắc chắn xóa sản phẩm?");
    if (confirmResult) {
      this._postService.Delete(id)
        .then(() => {
          this.posts = this.posts.filter(h => h.P_ID !== id);
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
                                    
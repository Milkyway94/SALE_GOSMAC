import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product-overview',
  template: `<h2>Tổng quan</h2>`
})
export class ProductOverviewComponent implements OnInit, OnDestroy {
  public parentRouterId: number;
  public sub: Subscription;
  public product: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.sub = this.router.routerState.root.parent.params
    this.sub = this.activatedRoute.parent.params
    .subscribe(params=>{
      this.parentRouterId = params['id'];
      alert('id: ' + this.parentRouterId);
    });
  }
  ngOnDestroy(){

  }
}

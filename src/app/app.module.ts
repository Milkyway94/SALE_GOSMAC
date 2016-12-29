import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {PostService} from './services/post.service';
import {AppMenuComponent} from  './appmenu.component';
import { StorageComponent } from './storage/storage.component'
// Define the routes

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AppMenuComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'product', component: PostsComponent },
      { path: '', redirectTo: 'post', pathMatch: 'full' },
      { path: '**', redirectTo: 'post', pathMatch: 'full' }
    ])
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [ApiService]
})
export class PostsComponent implements OnInit {
  public posts: any;

  constructor(private _api: ApiService) { }

  ngOnInit(): void {

    this._api.getPosts()
      .subscribe(data => { // data is already a JSON object
        this.posts = data;
        console.log(this.posts);
      });
  }


}

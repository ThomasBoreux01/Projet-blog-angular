import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: number;
  @Input() postContent: number;
  @Input() postLoveIts: number;
  @Input() postCreated_at: number;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 0
    );
  });

  constructor() { }

  ngOnInit() {
  }

  getNbLove(){
    if(this.postLoveIts>0){
      return false;
    }
    if(this.postLoveIts<0){
      return true;
    }
  }

  plusLoveIts(){
    this.postLoveIts=this.postLoveIts+1;
    this.getNbLove();
    return this.postLoveIts;
  }
  moinsLoveIts(){
    this.postLoveIts=this.postLoveIts-1;
    this.getNbLove();
    return this.postLoveIts;
  }

}

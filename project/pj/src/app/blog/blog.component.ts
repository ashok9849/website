import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog : any = {};
  allItems: any[];
  pages: any[];
  pageSize : 3;
  pager: any = {};

  constructor(private config : ConfigService,  private pagerService: PagerService) { }
  ngOnInit(){
    this.blog = this.getBlog();
    this.allItems= this.blog.post;
    this.setPage(1); 
  }
  getBlog(){
    return this.config.getconfig().blog;
  }


  setPage(pageNumber : number){
    //create a pagerusing paging services
    this.pager = this.pagerService.getPager(this.allItems.length,pageNumber ,this.pageSize);

    // current page posts
    this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex  + 1);

  }

}
 
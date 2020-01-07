import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
import {Router} from "@angular/router";
import {Article} from "../model/article.model";
import {Catalogue1Service} from "../services1/catalogue1.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public articles:any;
  public size: number=5;
  public currentPage: number=0;
  public totalPages: number;
  public pages:Array<number>;
  public currentkeyword:string="";
  constructor(private catService:CatalogueService, private router:Router) { }
  ngOnInit() {
  }
  onGetArticles() {
    this.catService.getArticles(this.currentPage,this.size)
      .subscribe(data=>{
        this.totalPages=data["page"].totalPages;
        this.pages= new Array<number>(this.totalPages);
        this.articles=data;
      },err=>{
        console.log(err);
      });
  }

  onPageArticles(i: number) {
    this.currentPage=i;
    this.chercherArticles();
  }
  onChercher1(form: any) {
    this.currentPage=0;
    this.currentkeyword=form.keyword;
    this.chercherArticles();
  }
  chercherArticles() {
    this.catService.getArticlesByKeyword(this.currentkeyword,this.currentPage,this.size)
      .subscribe(data=>{
          this.pages= new Array<number>(this.totalPages);
          this.articles=data;
      },err=>{
        console.log(err);
      });
  }
    onDeleteArticle(a) {
    let conf=confirm("Etes vous sure?");
    if (conf)
      this.catService.deleteRessource(a._links.self.href)
        .subscribe(data=>{
            this.chercherArticles();
          },err=>{
            console.log(err);
          }
        )
  }
  onEditArticle(a) {
    let url=a._links.self.href;
    this.router.navigateByUrl("/edit-article/"+btoa(url));
  }
}

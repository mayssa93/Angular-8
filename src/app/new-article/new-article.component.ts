import { Component, OnInit } from '@angular/core';
import {Article} from "../model/article.model";
import {CatalogueService} from "../services/catalogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  public currentArticle: Article;
  public mode: number=1;

  constructor(private catService:CatalogueService, private router:Router) { }

  ngOnInit() {
  }

  onSaveArticle(data: any) {
    this.catService.saveRessource(this.catService.host+"/articles",data)
      .subscribe(res=>{
        //this.router.navigateByUrl("/products");
        this.currentArticle=res;
        this.mode=2;
      },err=>{
        console.log(err);
      })
  }

  onNewArticle() {
    this.mode=1;
  }
}

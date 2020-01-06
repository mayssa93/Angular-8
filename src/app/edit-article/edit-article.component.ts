import { Component, OnInit } from '@angular/core';
import {Article} from "../model/article.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogueService} from "../services/catalogue.service";
@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  public currentArticle:Article;
  public url: string;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private catService:CatalogueService) { }

  ngOnInit() {
    this.url=atob(this.activatedRoute.snapshot.params.id);
    this.catService.getRessource(this.url)
      .subscribe(data=>{
        this.currentArticle=data;
      },err=>{
        console.log(err);
      })
  }

  onUpdateArticle(value: any) {
    this.catService.updateRessource(this.url,value)
      .subscribe(data=>{
        alert("Mise à jour effectué avec succès");
        this.router.navigateByUrl("/articles");
      },err=>{
        console.log(err);
      })
  }
}

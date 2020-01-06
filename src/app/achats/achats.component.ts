import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Catalogue1Service} from "../services1/catalogue1.service";

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css']
})
export class AchatsComponent implements OnInit {
  public achats:any;
  public size: number=5;
  public currentPage: number=0;
  public totalPages: number;
  public pages:Array<number>;
  public currentkeyword:string="";
  constructor(private catService1:Catalogue1Service, private router:Router) { }

  ngOnInit() {

  }
  onGetAchats() {
    this.catService1.getAchats(this.currentPage,this.size)
      .subscribe(data=>{
        this.totalPages=data["page"].totalPages;
        this.pages= new Array<number>(this.totalPages);
        this.achats=data;
      },err=>{
        console.log(err);
      });
  }

  onPageAchats(i: number) {
    this.currentPage=i;
    this.chercherAchats();
  }
  onChercher1(form: any) {
    this.currentPage=0;
    this.currentkeyword=form.keyword;
    this.chercherAchats();
  }
  chercherAchats() {
    this.catService1.getAchats(this.currentPage,this.size)
      .subscribe(data=>{
        this.totalPages=data["page"].totalPages;
        this.pages= new Array<number>(this.totalPages);
        this.achats=data;
      },err=>{
        console.log(err);
      });
  }

  onDeleteAchat(ac) {
    let conf=confirm("Etes vous sure?");
    if (conf)
      this.catService1.deleteRessource(ac._links.self.href)
        .subscribe(data=>{
            this.chercherAchats();
          },err=>{
            console.log(err);
          }
        )
  }

  onEditAchat(ac) {
    let url=ac._links.self.href;
    this.router.navigateByUrl("/edit-achat/"+btoa(url));
  }

}

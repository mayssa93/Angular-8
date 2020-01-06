import { Component, OnInit } from '@angular/core';
import {Catalogue2Service} from "../services2/catalogue2.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {ligneAchat} from "../model/ligneAchat";
@Component({
  selector: 'app-lignesachat',
  templateUrl: './lignesachat.component.html',
  styleUrls: ['./lignesachat.component.css']
})
export class LignesachatComponent implements OnInit {
  public lignesachat:any;
  public size: number=5;
  public currentPage: number=0;
  public totalPages: number;
  public pages:Array<number>;
  public currentkeyword:string="";
  public errorMsg;
  public achat:any;
  constructor(private catService2:Catalogue2Service, private router:Router) { }
  ngOnInit() {

  }
  onGetAchats() {
   this.catService2.getligneAchats()
     .subscribe(data=> this.lignesachat=data,
                      error=>this.errorMsg=error);
  }
  onPageLigneAchats(i: number) {
    this.currentPage=i;
    this.chercherLigneAchats();
  }
  onChercher(form: any) {
    this.currentPage=0;
    this.currentkeyword=form.keyword;
    this.chercherLigneAchats();
  }
  chercherLigneAchats() {
    this.catService2.getligneAchats()
      .subscribe(data=>{
        this.totalPages=data["page"].totalPages;
        this.pages= new Array<number>(this.totalPages);
        this.lignesachat=data;
      },err=>{
        console.log(err);
      });
  }
  onDeleteLigneAchat(la) {
    let conf=confirm("Etes vous sure?");
    if (conf)
      this.catService2.deleteRessource(la._links.self.href)
        .subscribe(data=>{
            this.chercherLigneAchats();
          },err=>{
            console.log(err);
          }
        )
  }
  onGetAchatLigneAchat(la) {
      this.catService2.getRessource(la._links.achat.href)
        .subscribe(data=>{
            this.achat=data;
          },err=>{
            console.log(err);
          }
        )
  }
  onEditLigneAchat(la) {
    let url=la._links.self.href;
    this.router.navigateByUrl("/edit-lignesAchat/"+btoa(url));
  }
  }

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
  public size: number=5;
  public currentPage: number=0;
  public totalPages: number;
  public pages:Array<number>;
  public currentkeyword:string="";
  public errorMsg;
 public ligneachats: Observable<ligneAchat>;
  constructor(private catService2:Catalogue2Service, private router:Router) { }
  ngOnInit() {
  this.reloadData();
  }
 reloadData() {
  this.ligneachats = this.catService2.getLigneachatsList();
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
    this.catService2.getLigneachatsList()
      .subscribe(data=>{
        this.totalPages=data["page"].totalPages;
        this.pages= new Array<number>(this.totalPages);
        this.ligneachats=data;
      },err=>{
        console.log(err);
      });
  }
  onDeleteLigneAchat(id: number) {
    let conf=confirm("Etes vous sure?");
    if (conf)
      this.catService2.deleteRessource(id)
        .subscribe(data=>{
            this.reloadData;
          },err=>{
            console.log(err);
          }
        )
  }

 /* onGetAchatLigneAchat(la) {
      this.catService2.getRessource(la._links.achat.href)
        .subscribe(data=>{
            this.achat=data;
          },err=>{
            console.log(err);
          }
        )
  }*/
  onEditLigneAchat(id:number) {
    this.router.navigate(['edit-lignesAchat',id]);
  }
  }

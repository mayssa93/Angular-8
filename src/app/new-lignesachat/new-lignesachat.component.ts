import { Component, OnInit } from '@angular/core';
import {Catalogue2Service} from "../services2/catalogue2.service";
import {Router} from "@angular/router";
import {ligneAchat} from "../model/ligneAchat";

@Component({
  selector: 'app-new-lignesachat',
  templateUrl: './new-lignesachat.component.html',
  styleUrls: ['./new-lignesachat.component.css']
})
export class NewLignesachatComponent implements OnInit {
  public currentligneAchat: ligneAchat;
  public mode: number=1;

  constructor(private catService2:Catalogue2Service, private router:Router) { }

  ngOnInit() {
  }

  onSaveLigneAchat(data: any) {
    this.catService2.saveRessource(this.catService2.host+"/ligneAchats",data)
      .subscribe(res=>{
        //this.router.navigateByUrl("/products");
        this.currentligneAchat=res;
        this.mode=2;
      },err=>{
        console.log(err);
      })
  }

  onNewLigneAchat() {
    this.mode=1;
  }

}

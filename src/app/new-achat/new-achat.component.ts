import { Component, OnInit } from '@angular/core';
import {Achat} from "../model/achat.model";
import {Catalogue1Service} from "../services1/catalogue1.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-achat',
  templateUrl: './new-achat.component.html',
  styleUrls: ['./new-achat.component.css']
})
export class NewAchatComponent implements OnInit {
  public currentAchat: Achat;
  public mode: number=1;

  constructor(private catService1:Catalogue1Service, private router:Router) { }

  ngOnInit() {
  }

  onSaveAchat(data: any) {
    this.catService1.saveRessource(this.catService1.host+"/achats",data)
      .subscribe(res=>{
        //this.router.navigateByUrl("/products");
        this.currentAchat=res;
        this.mode=2;
      },err=>{
        console.log(err);
      })
  }

  onNewAchat() {
    this.mode=1;
  }

}

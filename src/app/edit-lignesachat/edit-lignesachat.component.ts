import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ligneAchat} from "../model/ligneAchat";
import {Catalogue2Service} from "../services2/catalogue2.service";

@Component({
  selector: 'app-edit-lignesachat',
  templateUrl: './edit-lignesachat.component.html',
  styleUrls: ['./edit-lignesachat.component.css']
})
export class EditLignesachatComponent implements OnInit {

  public currentligneAchat:ligneAchat;
  public url: string;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private catService2:Catalogue2Service) { }

  ngOnInit() {
  this.url=atob(this.activatedRoute.snapshot.params.id);
    this.catService2.getRessource(this.url)
      .subscribe(data=>{
        this.currentligneAchat=data;
      },err=>{
        console.log(err);
      })
  }
  onUpdateLigneAchat(value: any) {
    this.catService2.updateRessource(this.url,value)
      .subscribe(data=>{
        alert("Mise à jour effectué avec succès");
        this.router.navigateByUrl("/lignesachat");
      },err=>{
        console.log(err);
      })
  }
}

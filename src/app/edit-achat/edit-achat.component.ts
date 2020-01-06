import { Component, OnInit } from '@angular/core';
import {Achat} from "../model/achat.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Catalogue1Service} from "../services1/catalogue1.service";

@Component({
  selector: 'app-edit-achat',
  templateUrl: './edit-achat.component.html',
  styleUrls: ['./edit-achat.component.css']
})
export class EditAchatComponent implements OnInit {

  public currentAchat:Achat;
  public url: string;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private catService1:Catalogue1Service) { }

  ngOnInit() {
    this.url=atob(this.activatedRoute.snapshot.params.id);
    this.catService1.getRessource(this.url)
      .subscribe(data=>{
        this.currentAchat=data;
      },err=>{
        console.log(err);
      })
  }

  onUpdateAchat(value: any) {
    this.catService1.updateRessource(this.url,value)
      .subscribe(data=>{
        alert("Mise à jour effectué avec succès");
        this.router.navigateByUrl("/achats");
      },err=>{
        console.log(err);
      })
  }
}

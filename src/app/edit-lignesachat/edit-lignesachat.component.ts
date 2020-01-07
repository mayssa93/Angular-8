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
  id: number;
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private catService2:Catalogue2Service) { }

  ngOnInit() {
    this.currentligneAchat = new ligneAchat();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.catService2.getAchats(this.id)
      .subscribe(data => {
        console.log(data)
        this.currentligneAchat = data;
      }, error => console.log(error));
  }
  onUpdateLigneAchat() {
    this.catService2.updateRessource(this.id,this.currentligneAchat)
      .subscribe(data => console.log(data), error => console.log(error));
    this.currentligneAchat= new ligneAchat();
    this.gotoList();
}

onSubmit() {
  this.onUpdateLigneAchat();
}

gotoList() {
  this.router.navigate(['/lignesachat']);
}
}

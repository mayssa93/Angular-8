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
  currentligneAchat: ligneAchat = new ligneAchat();
  submitted = false;
  constructor(private catService2:Catalogue2Service, private router:Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.currentligneAchat = new ligneAchat();
  }

  save() {
    this.catService2.createEmployee(this.currentligneAchat)
      .subscribe(data => console.log(data), error => console.log(error));
    this.currentligneAchat = new ligneAchat();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['lignesachat']);
  }
}

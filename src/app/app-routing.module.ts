import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewArticleComponent} from "./new-article/new-article.component";
import {NewAchatComponent} from "./new-achat/new-achat.component";
import {EditArticleComponent} from "./edit-article/edit-article.component";
import {EditAchatComponent} from "./edit-achat/edit-achat.component";
import {ArticlesComponent} from "./articles/articles.component";
import {AchatsComponent} from "./achats/achats.component";
import {LignesachatComponent} from "./lignesachat/lignesachat.component"
import {NewLignesachatComponent} from "./new-lignesachat/new-lignesachat.component";
import {EditLignesachatComponent} from "./edit-lignesachat/edit-lignesachat.component";
const routes: Routes = [
  {
    path:"articles",component:ArticlesComponent
  },
  {
    path:"achats",component:AchatsComponent
  },
  {
    path:"lignesachat",component:LignesachatComponent
  },
  {
    path:"new-achat", component:NewAchatComponent
  },
  {
    path:"new-lignesAchats", component:NewLignesachatComponent
  },
  {
    path:"edit-achat/:id", component:EditAchatComponent
  },
  {
    path:"new-article", component:NewArticleComponent
  },
  {
    path:"", redirectTo:"/articles",pathMatch :'full'
  },
  {
    path:"edit-article/:id", component:EditArticleComponent
  },
  {
    path:"edit-lignesAchat/:id", component:EditLignesachatComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

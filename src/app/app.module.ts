import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ArticlesComponent } from './articles/articles.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { AchatsComponent } from './achats/achats.component';
import { NewAchatComponent } from './new-achat/new-achat.component';
import { EditAchatComponent } from './edit-achat/edit-achat.component';
import { LignesachatComponent } from './lignesachat/lignesachat.component';
import { NewLignesachatComponent } from './new-lignesachat/new-lignesachat.component';
import { EditLignesachatComponent } from './edit-lignesachat/edit-lignesachat.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    NewArticleComponent,
    EditArticleComponent,
    AchatsComponent,
    NewAchatComponent,
    EditAchatComponent,
    LignesachatComponent,
    NewLignesachatComponent,
    EditLignesachatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

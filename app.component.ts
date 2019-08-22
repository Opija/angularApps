import { Component } from '@angular/core';
import { Article } from './data/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public articles:Article[];

 constructor(){
   this.articles=[
     new Article('Kuza Lab Ltd','https://www.kuzalab.com',10),
     new Article('Milnet Ltd','https://www.milnet.co.ke',12),
     new Article('Insense Data Technologies','https://www.insensedata.com',20),
     new Article('ABNO Technologies','https://www.abno.co.ke',0)
   ];
 }
  addArticle(title:HTMLInputElement,link:HTMLInputElement):boolean{
    console.log(`Adding article title:${title.value} and link:${link.value}`);
    this.articles.push(new Article(title.value,link.value,0));
    title.value='';
    link.value='';
    return false;
  }
  sortedArticles():Article[]{
    return this.articles.sort((a:Article,b:Article)=>b.votes-a.votes);
  }
}

import { Component } from '@angular/core';
import { NewService } from './services/new.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-api-frontend';
  news: any[]=[];
  loading=false;

  constructor(private newService : NewService){}


  searchNews(param:any){
    this.news = [];
    setTimeout(() =>{
      this.loading = true;
      this.newService.getNews(param).subscribe(result => {
        this.news = result.articles;
        this.loading=false;
      })

    },1000)
    /*
https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=eededeee78c3431d822a8af660c44fc8 */
  }
}

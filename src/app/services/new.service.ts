import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private http:HttpClient) { }

  getNews(params:any):Observable<any>{
    const URL ='https://newsapi.org/v2/top-headlines?country='+params.country+'&category='+params.category+'&apiKey=eededeee78c3431d822a8af660c44fc8'
   return this.http.get(URL);
  }
}

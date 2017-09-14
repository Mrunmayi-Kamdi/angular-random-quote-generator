import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QuoteService {

  constructor(private http: Http) { }


  getRandomQuote(){
    return this.http
                .get('https://talaikis.com/api/quotes/random/')
                .map(response => response.json());
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QuoteService {
	url: string = 'https://talaikis.com/api/quotes/random/';
	constructor(private http: Http) { }


  getRandomQuote(){
    return this.http
                .get(url)
                .map(response => response.json());
  }
}

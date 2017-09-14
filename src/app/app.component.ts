import { Component } from '@angular/core';
import { QuoteService } from './providers/quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private quote: string = 'I dont think any good book is based on factual experience. Bad books are about things the writer already knew before he wrote them.';
  private author: string = 'Carlos Fuentes';

  constructor(private _quoteService: QuoteService){

  }

  getQuote(){
    let quote;
    this._quoteService.getRandomQuote().subscribe(data => {
      console.log(data);
      this.quote = data.quote;
      this.author = data.author;
    });
  }
}

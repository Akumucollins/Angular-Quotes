import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning.', 'Programming Quote', 'Rick Cook', 'Akumu Collins', new Date(1567, 3, 14)),
    new Quote(2, 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.', 'Programming Quote', 'Edsger Dijkstra', 'Akumu Collins', new Date(1975, 3, 14)),
  ];


  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.publishDate = new Date(quote.publishDate)
    this.quotes.push(quote)

  }

  thumbUp:number=0;
  upVote(){
    this.thumbUp++;

  }
  thumbDown:number=0;
  downVote(){
    this.thumbDown++;

  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  constructor() { }

  ngOnInit(){
  }

}

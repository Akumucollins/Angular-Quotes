import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(2, 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning.', 'Programming Quote', 'Rick Cook', 'Akumu Collins', new Date(1767, 3, 14)),
    new Quote(1, 'Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.', 'Love Quote', 'Maya Angelou', 'Adrian Omondi', new Date(1859, 3, 14)),
  ];


  addNewQuote(emittedQoute) {
    this.quotes.push(emittedQoute)
  }

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }

  initialVote : number;
  finalVote : number;
  counter : number;

  highestVotes(){
    this.initialVote = 0;
    this.finalVote = 0;

    for(this.counter = 0 ; this.counter < this.quotes.length; this.counter++){
      this.finalVote = this.quotes[this.counter].thumbUp;
      if(this.finalVote > this.initialVote){this.initialVote = this.finalVote}
    }
    return this.initialVote ;
  }


  constructor() { }

  ngOnInit() {
  }

}

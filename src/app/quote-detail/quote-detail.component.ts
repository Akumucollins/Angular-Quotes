import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  constructor() { }
  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  // upVote(quote){
  //   this.quote.upVote++
  // }
  // downVote(quote){
  //   this.quote.downVote++
  // }
  upVotes:number=0;
  upVote(){
    this.upVotes=this.upVotes+1;

  }
  downVotes:number=0;
  downVote(){
    this.downVotes=this.downVotes+1;

  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() isRead = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  thumbUp = 0;
  thumbDown = 0;

  upVote(){
    this.thumbUp += 1;

  }
  
  downVote(){
    this.thumbDown += 1;

  }
  
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
// import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote (0,'','','','',new Date());
  @Output() postQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.postQuote.emit(this.newQuote);
    
  }
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
// import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  // newQuote = new Quote(0, '', '', '', '', new Date());
  @Output() emitQuote = new EventEmitter()
  quoteName: string
  quoteCategory: string
  quoteAuthor: string
  quotePublisher: string
  quotePublishDate: Date
  postQuote: any

  submitQuote() {
    this.postQuote = new Quote(0,this.quoteName, this.quoteCategory, this.quoteAuthor, this.quotePublisher, this.quotePublishDate)
    this.quoteName = ''
    this.quoteCategory = ''
    this.quoteAuthor = ''
    this.quotePublisher = ''
    this.quotePublishDate = new Date()
    this.emitQuote.emit(this.postQuote)
  }

  constructor() { }

  ngOnInit() {
  }

}

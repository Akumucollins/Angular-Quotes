export class Quote {
    showQuote: boolean;
  showDescription: boolean;
    constructor(public id: number, public name: string,   public category: string, public author: string, public publisher: string, public publishDate: Date ){
      // this.thumbUp = 0;
      // this.thumbDown = 0;
      this.showQuote = false;
    }
}
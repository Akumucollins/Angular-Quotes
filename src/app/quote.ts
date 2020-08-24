export class Quote {
    showQuote: boolean;
    constructor(public id: number, public name: string,   public category: string, public author: string, public publisher: string, public publishDate: Date ){
        this.showQuote = false;
    }
}
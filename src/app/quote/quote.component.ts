import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quotes[]=[
    new Quotes(1, 'Mykey', 'Life', 'He who marries beauty mrries trouble', new Date(2020/6/6)),
    new Quotes(2, 'Yvette', 'Life', 'Only a fool tests the depth of a river with both feet', new Date(2020/6/6)),
    new Quotes(3, 'Timothy Munene', 'Technology', 'He who does not know one thing knows another.', new Date(2020/6/6)),
  ]

  completeGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    this.quote.push(quote);
  }

  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

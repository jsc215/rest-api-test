import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocks;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getStocks();
  }

  getStocks() {
   this.dataService.getStocks().subscribe((stocks) => (this.stocks = stocks));
  }
}

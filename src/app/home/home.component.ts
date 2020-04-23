import { Component, OnInit } from '@angular/core';
import {RoketsService } from '../rokets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(
    private historyService: RoketsService
  ) { }
    
   historyEvents;
   homeApiError: any;
   showSpinner:boolean =true ;

  ngOnInit(): void {
    this.historyService.getHistory().subscribe(response => 
      { 
        setTimeout(() => {     
          this.historyEvents = response; 
          this.showSpinner =false;
        }, 1000);
      },(error) => 
      { this.homeApiError = error; }
    );
}
}
import { Component, OnInit } from '@angular/core';
import {RoketsService } from '../rokets.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private infoService: RoketsService
    ) { }

    infos: any ={};
    aboutApiError: any;
    showSpinner:boolean =true ;

  ngOnInit(): void {

    this.infoService.getInfo().subscribe(response => 
      { 
        setTimeout(() => {     
          this.infos = response; 
          this.showSpinner =false;
        }, 1000);
      },(error) => 
      { this.aboutApiError = error; }
    );
  
  } 
}

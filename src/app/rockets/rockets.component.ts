import { Component, OnInit } from '@angular/core';
import { RoketsService } from '../rokets.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {
  constructor(
    private RoketsService: RoketsService
  ) { }

  allrocketObj;
  rocketsApiError: any;
  showSpinner:boolean =true ;
  recivedCurentRoute;
 // AvatarFileName :string ;

  captureEmittedData(emittedData) {
        console.log(emittedData);
        this.recivedCurentRoute = emittedData;
  }
 

  ngOnInit(): void {
    this.RoketsService.getAllRockets().subscribe(response => 
    {
      setTimeout(() => {     
        this.allrocketObj = response; 
        this.showSpinner =false;
         }, 1000);
    },(error) => 
    { this.rocketsApiError = error; }
  );
  }
}


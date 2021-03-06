import { Component, OnInit,Output, Input ,EventEmitter } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { RoketsService } from '../rokets.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private roketsServiceObj: RoketsService,
    private route: ActivatedRoute,
  ) { }
  
  @Output() dataEmitter: 
    EventEmitter<any> = new EventEmitter<any>();

   // @Input() AvatarFileName: string;
  rocketObj;
  detailApiError: any;
  showSpinner:boolean =true ;
  curentRocket;
  
  emittingFunction() {
    this.dataEmitter.emit(this.curentRocket);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
       const rocket_id= params.rocket_id;
         this.roketsServiceObj.getPickedRocket(rocket_id)
              .subscribe(response => 
                {   
                   setTimeout(() => {    
                       this.rocketObj= response;
                       this.showSpinner =false;
                       this.curentRocket=this.rocketObj.rocket_name;
                       this.emittingFunction();
                   }, 1000); // set time out
                },(error) => 
                { this.detailApiError = error; }
                ) // inner subscribe for detail route 
      }); // outer subscribe for rockets route 
    
  }
}



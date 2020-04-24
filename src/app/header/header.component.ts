import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() MainHeaderTiltel: string;
  
  @Output() dataEmitter: EventEmitter<any> = new EventEmitter<any>();
  footerContent = 'Copyright Spacex API DEMO  2020';
  emittingFunction() {
    this.dataEmitter.emit(this.footerContent);
  }

  ngOnInit(): void {
    this.emittingFunction();
  }

}

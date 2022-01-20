import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  
  dateValue = '';
  dateValue2 = '';
  constructor() {}
 
}

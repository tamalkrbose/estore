import { Component, OnInit } from '@angular/core';

import {
  DataService
} from '../../data.service';
@Component({
  selector: 'app-print',
  templateUrl: './print.page.html',
  styleUrls: ['./print.page.scss'],
})
export class PrintPage implements OnInit {

  constructor(private dataService: DataService,) { }

  batchNumber: any;
  vBatchNumber: any;
  ngOnInit() {
  }

  getExcelData(){
    this.dataService.getExcelData(this.vBatchNumber).subscribe(async res => {
      if (res == 0) {
        console.log("getExcelData() >> error");
      }
      if (res != 0) {
        console.log("getExcelData() >> dataSet! ");
        console.log(res);
      }
    })
  }

  getPrinted(){
    this.getExcelData();
  }

}

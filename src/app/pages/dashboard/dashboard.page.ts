import { Component, OnInit } from '@angular/core';
import readXlsxFile from 'read-excel-file'
import mysql from 'mysql';
import {
  DataService
} from '../../data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor( private dataService: DataService, ) { }

  vBatchNo: any;

  ngOnInit() {
  }

  dataSet: any;
  dataSetExcel= {dataArray: null, batchNumber: null  };

  getImported(e){
    console.log(e);
    readXlsxFile(e.srcElement.files[0]).then((rows) => {
      // `rows` is an array of rows
      // each row being an array of cells.
      console.log(rows);
      this.dataSetExcel.dataArray = rows;

    })

  }

  setBatchNo(){ 
    this.dataSetExcel.batchNumber = this.vBatchNo;
  
    this.dataService.setExcelData(this.dataSetExcel).subscribe(async res => {
      if (res == 0) {
        console.log("setExcelData() >> error");
      }
      if (res != 0) {
        console.log("setExcelData() >> dataSet! ");
      }
    })
  }



}

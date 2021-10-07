import { Component, OnInit } from '@angular/core';
import {
    DataService
} from '../../data.service';

@Component({
    selector: 'app-records',
    templateUrl: './records.page.html',
    styleUrls: ['./records.page.scss'],
})
export class RecordsPage implements OnInit {
    vSearchText: string;
    constructor(private dataService: DataService) { }

    // recordData = [
    //     { po_id: '1', customer_id: '123456', ship_name: '02', ship_mobile_number: '9458632158', ship_city: 'lucknow', ship_pincode: '7000144', order_date: '02.08.2021', weight: '200gm', status: 'null' },
    //     { po_id: '2', customer_id: '12555656', ship_name: '03', ship_mobile_number: '8865478952', ship_city: 'bangalore', ship_pincode: '575812', order_date: '03.08.2021', weight: '200gm', status: 'null' },
    //     { po_id: '3', customer_id: '10122456', ship_name: '0042', ship_mobile_number: '9458632158', ship_city: 'kolkat', ship_pincode: '700052', order_date: '02.05.2021', weight: '200gm', status: 'null' },
    //     { po_id: '4', customer_id: '4556', ship_name: '02', ship_mobile_number: '945860025258', ship_city: 'lucknow', ship_pincode: '7000144', order_date: '21.07.2021', weight: '200gm', status: 'null' },
    //     { po_id: '5', customer_id: '783456', ship_name: '06', ship_mobile_number: '78732158', ship_city: 'kolkata', ship_pincode: '7000144', order_date: '25.09.2021', weight: '200gm', status: 'null' }

    // ];
    recordData = [ ];
    ngOnInit() {
    }
    search() {
        console.log(this.vSearchText);
        this.dataService.getExcelData({ batchNumber: this.vSearchText }).subscribe(res => {
            console.log(res);
            this.recordData = res;
        });
    }

}

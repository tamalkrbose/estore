import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-records',
  templateUrl: './records.page.html',
  styleUrls: ['./records.page.scss'],
})
export class RecordsPage implements OnInit {

  constructor() { }

  recordData = [
    {poId: '1', customId: '123456', shipName: '02', shipMobNumber :'9458632158', shipCity : 'lucknow', ShipPinCode: '7000144', orderDate : '02.08.2021', weight : '200gm', status: 'null' },
    {poId: '2', customId: '12555656', shipName: '03', shipMobNumber :'8865478952', shipCity : 'bangalore', ShipPinCode: '575812', orderDate : '03.08.2021', weight : '200gm',status: 'null'  },
    {poId: '3', customId: '10122456', shipName: '0042', shipMobNumber :'9458632158', shipCity : 'kolkat', ShipPinCode: '700052', orderDate : '02.05.2021', weight : '200gm',status: 'null'  },
    {poId: '4', customId: '4556', shipName: '02', shipMobNumber :'945860025258', shipCity : 'lucknow', ShipPinCode: '7000144', orderDate : '21.07.2021', weight : '200gm', status: 'null'  },
    {poId: '5', customId: '783456', shipName: '06', shipMobNumber :'78732158', shipCity : 'kolkata', ShipPinCode: '7000144', orderDate : '25.09.2021', weight : '200gm',status: 'null'  }

  ];
  ngOnInit() {
  }

}

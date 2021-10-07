import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  identity,
  Observable
} from 'rxjs';


const PATH = "https://erpexcel.herokuapp.com/";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }

  setExcelData(data: any, ): Observable < any > {
    let url = PATH + 'dashboard/setExcelData';
    return this.http.post < any > (url, data);
  }

  getExcelData(data: any, ): Observable < any > {
    let url = PATH + 'dashboard/getExcelData';
    return this.http.post < any > (url, data);
  }

 

  

}

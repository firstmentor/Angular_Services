import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeeapiService {


    name="pninfosys"


  url="http://127.0.0.1:8000/api/allData"
  constructor(private http:HttpClient) { }


  getdata():Observable<any>{

    return this.http.get(this.url)
  }
}

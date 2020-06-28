import { Component } from '@angular/core';
import { FeeapiService } from './service/feeapi.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstpart';
  
  newsdata;
  constructor(private feeapi:FeeapiService){}//import FeeapiService

    ngOnInit(): void {
      this.feeapi.getdata()
      .subscribe
      (
         data=>
         {
           this.newsdata =data.user;
           console.log(this.newsdata);
         }
      )
     

      
    }
    


  


}

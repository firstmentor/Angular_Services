import { Component } from '@angular/core';
import { PninfosysService } from './pninfosys.service';
import { $ } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstpart';
  name;
  students;
  
  constructor(private pnservice:PninfosysService){}//import PninfosysService

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.name=this.pnservice.mydata;
      this.students=this.pnservice.stdData;

      
    }
    


  


}

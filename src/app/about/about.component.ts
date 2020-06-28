import { Component, OnInit } from '@angular/core';
import { PninfosysService } from '../pninfosys.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name;
  students;

  constructor(private aboutservice:PninfosysService) { }

  ngOnInit() {
    this.name=this.aboutservice.mydata;
    this.students=this.aboutservice.stdData;
  }

}

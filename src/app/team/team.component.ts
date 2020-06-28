import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  
  resData;
  newsdata;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    const url="http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-16&sortBy=publishedAt&apiKey=557b6586e92d4f74ad804c7771d6a5ea";
    this.http.get(url).subscribe(res=>{   //data store
      //console.log(res);
    this.resData=res;
    this.newsdata=this.resData.articles;
    console.log(this.newsdata);
    })
  }

}

import { PexelService } from './pexel.service';
import { Component } from '@angular/core';
import {  } from "module";
import { error } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search:string;
  page:number;
  data:string[];


  constructor(private pexel : PexelService){}

  searchphotos() {
    this.pexel.getdata(this.search,this.page).subscribe((data)=>{
      console.log(data);
      this.data=data.photos;
      
    }),(error)=>{
      console.log(error);

      
    }
  }
}

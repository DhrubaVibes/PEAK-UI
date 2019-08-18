import { Component, OnInit } from '@angular/core';

import "../assets/js/main.js";
import { IpService } from './ipService/app.ipservice.component.js';
import { JsonPipe } from '@angular/common';


declare function topFunction();


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'peak-new';

  constructor(private ipService: IpService) {

    this.ipService.getIpClient()
      .subscribe((res: any) => {    
        this.ipService.saveIpClient(res['ip']).subscribe(
          (res: any) => {

          }
        );    
      }
      );
  }

  ngOnInit() {

  }

  gotToTop() {
    topFunction();
  }

}
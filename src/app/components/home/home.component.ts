import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  albums:any [] = [];
  co:boolean;
  

  constructor(private homeService:HomeService) { 
    this.co = true;
    this.homeService.getNewRelases()
        .subscribe((data:any) => {
          this.albums = data;
          this.co = false;
        });
  }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  albums:any [] = [];

  constructor(private homeService:HomeService) { 
    this.homeService.getNewRelases()
        .subscribe((data:any) => {
          this.albums = data.albums.items
          console.log(this.albums)
        });
  }

  ngOnInit() {
  }
}

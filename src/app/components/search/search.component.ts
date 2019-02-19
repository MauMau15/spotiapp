import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists:any[] = [];

  constructor(private service:HomeService) { }

  ngOnInit() {
  }

  buscar(artist:any){
    this.service.getArtista(artist)
        .subscribe((data:any) => {
          this.artists = data.artists.items;
          console.log(this.artists);
        });
  }
}

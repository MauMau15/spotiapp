import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-atista',
  templateUrl: './atista.component.html',
  styles: []
})
export class AtistaComponent implements OnInit {

  artist: any = {};
  loading:boolean;
  topTracks:any[] = [];
  showTopTracks:boolean;

  constructor(private router:ActivatedRoute, private service:HomeService) { 
    this.loading = true;
    this.showTopTracks = false;
    this.router.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit() {
  }

  getArtista(artistaId){
    this.service.getArtista(artistaId)
                .subscribe(artist => {
                  this.artist = artist;
                  this.loading = false;
                  console.log(this.artist)
                })
  }

  getTopTracks(artistaId:string){
    console.log(artistaId)
    this.service.getTopTracks(artistaId)
                .subscribe(topTracks =>{
                  console.log(topTracks)
                  this.topTracks = topTracks;
                })
  }

  showTracks(){
    this.showTopTracks = !this.showTopTracks
  }

}

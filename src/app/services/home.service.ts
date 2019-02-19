import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient:HttpClient) { }

  getQuery(query:string){
    const urlEndPoint = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQAulz1uiLOcM4vyyxnYcbt7WVqewWB8Gp7WH0FoVaTb2QhRW8zAF2FDLUlLxT-R11efUhvRmYHelhVmRWKcxd8s6OGhCY1NWK2JAivEV4YdDFc32ypRU4PM5Y-EGHILS6q73L4OonRj24Ldpuk'
    });
    return this.httpClient.get(urlEndPoint,{headers});
  } 

  getNewRelases(){
    
    return this.getQuery('browse/new-releases')
                .pipe(
                  map(data => {
                    console.log(data);
                    return data["albums"].items;
                  })
                );
  }

  getArtista(artista:string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDaGtrUMsjwgwIMUWohyvh2t9DlDVQpE89_kTlur7RxG6vOxSz1TgqwDzeqZhKeILM2F7QkR-yygVEydjtZV8Q2psJppyCs-y2BCKDRV24sglxIC2mfH-ne-FOa6fq-EJ0kruoXk0SZmUFdcPk'
    });
    return this.getQuery(`search?q=${artista}&type=artist`)
                .pipe(
                  map( data => { 
                    console.log(data);
                    return data['artists'].items;
                  })
                );
  }
}

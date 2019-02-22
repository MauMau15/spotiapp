import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getQuery(query: string) {
    const urlEndPoint = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBx1Z0Lr_Lz4KLpz1uJ950prXqwbXFclEEZ-hUAzbBNSYgfj-UMoP_6sirxJszQNpi31t_dNtVSMyKorgzw_ZWbfS3DM38lOjMi-Layv36njXKqAXLqwlnPDwwAeGfwZdfOt_Gs_QbuwkCkAvM'
    });
    return this.httpClient.get(urlEndPoint, { headers });
  }

  getNewRelases() {

    return this.getQuery('browse/new-releases')
      .pipe(
        map(data => {
          //console.log(data);
          return data["albums"].items;
        })
      );
  }

  getArtistas(artista: string) {
    return this.getQuery(`search?q=${artista}&type=artist`)
      .pipe(
        map(data => {
          //console.log(data);
          return data['artists'].items;
        })
      );
  }

  getArtista(artistaId: any[]) {
    console.log(artistaId)
    return this.getQuery(`artists/${artistaId}`)
      .pipe(
        map(data => {
          return data;
        })
      )
  }

  getTopTracks(artistaId: string) {
    return this.getQuery(`artists/${artistaId}/top-tracks?country=US`)
      .pipe(
        map(data => {
          return data['tracks'];
        })
      )
  }
}

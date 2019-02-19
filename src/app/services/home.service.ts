import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient:HttpClient) { }

  getNewRelases(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDy3j35IFkosvrYbMz3AobYBLwBU6sdcKKsRcVtZGZLSUQjIlJz4hLb3X5IfbZAbk57hXtOekCrxaLyJLibnxKbihXP6QAZASgo4a51bhDFqTirRU6SxoLNEhsHNsPQz2D2209yP0_qIlqje6o'
    });
    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases',{headers});
  }

  getArtista(artista:string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDy3j35IFkosvrYbMz3AobYBLwBU6sdcKKsRcVtZGZLSUQjIlJz4hLb3X5IfbZAbk57hXtOekCrxaLyJLibnxKbihXP6QAZASgo4a51bhDFqTirRU6SxoLNEhsHNsPQz2D2209yP0_qIlqje6o'
    });
    return this.httpClient.get(`https://api.spotify.com/v1/search?q=${artista}&type=artist`,{headers});
  }
}

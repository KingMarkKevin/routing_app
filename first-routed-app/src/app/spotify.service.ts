import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBLjsk5gAx5DzzRDjMJBr2BvcYvIEZFnS_i76AKA6dxfzIQXLVemlSziDqtNqqwPmhrKVq9RWpsS_OB2Znd7SER11xKkXNa2ZpEQ2MjuNaBgHEAgQAb-iBHdswrxQ4AJ37-wjzqN1bIjz1TvNxzIjKaOfl7cLU"'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({Authorization: environment.oauthToken});
    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }

  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAGlQ3XM1qzL8d-wsNjgKg8jp93uFfV40XTQ4aq0IPjqGMFDAb5VN4dr_qXlEjwgRvPWIGaViGiUvyGsuEwYOe5bM1Mw-ad4brkH9k9w6lZn1lyjQl50kChwetyvYM_R7paywgeAh7XSpXWkyUPsRPsiv-0faA"'
    });

    return this.http.get(url, { headers });
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ShowDetailModel } from "./show.model";
import { Observable } from "rxjs";

@Injectable()
export class ShowService {
  private url1: string = "http://localhost:4000/filtershows";
  private url2: string = "http://localhost:4000/filterepisodes";
  private url3: string = "http://localhost:4000/filterseasons";
  private url4: string = "http://localhost:4000/filtercast";
  private url5: string = "http://localhost:4000/epchecked";
  private url6: string = "http://localhost:4000/filtercheck";
  constructor(private http: HttpClient) {}

  filtershows(id: any): Observable<ShowDetailModel[]> {
    return this.http.post<ShowDetailModel[]>(this.url1, { id });
  }
  filterepisodes(id: any): Observable<ShowDetailModel[]> {
    return this.http.post<ShowDetailModel[]>(this.url2, { id });
  }
  filterseasons(id: any): Observable<ShowDetailModel[]> {
    return this.http.post<ShowDetailModel[]>(this.url3, { id });
  }
  filtercast(id: any): Observable<ShowDetailModel[]> {
    return this.http.post<ShowDetailModel[]>(this.url4, { id });
  }
  epChecked(arr: any, email: any, showId: any): Observable<ShowDetailModel[]> {
    return this.http.post<ShowDetailModel[]>(this.url5, { arr, email, showId });
  }

  filterCheck(email: any, showId: any): Observable<ShowDetailModel[]> {
    return this.http.post<ShowDetailModel[]>(this.url6, { email, showId });
  }

  // async searchShow(id) {
  //   var url = `http://api.tvmaze.com/shows/${id}`;
  //   var response = await fetch(url);
  //   var data = await response.json();
  //   return data;
  // }

  // async searchEpisode(id) {
  //   var url = `http://api.tvmaze.com/shows/${id}/episodes`;
  //   var response = await fetch(url);
  //   var data = await response.json();
  //   return data;
  // }

  // filterShows(id: any) {
  //   let array = [];
  //   this.searchShow(id).then((result) => {
  //     array.push(result);
  //   });
  //   return array;
  // }
  // filterEpisodes(id: any) {
  //   let array = [];
  //   this.searchEpisode(id).then((result) => {
  //     array.push(result);
  //   });
  //   return array;
  // }
  // filterSeasons(id: any) {
  //   let array = [];
  //   this.searchEpisode(id).then((result) => {
  //     var numSeason = result[result.length - 1].season;
  //     var arr = [];
  //     for (var i = 1; i <= numSeason; i++) {
  //       arr.push(i);
  //     }
  //     array.push(arr);
  //   });
  //   return array;
  // }
}

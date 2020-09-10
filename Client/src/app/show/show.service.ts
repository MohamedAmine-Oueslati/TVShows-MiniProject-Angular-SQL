import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ShowDetailModel } from "./show.model";
import { Observable } from "rxjs";

@Injectable()
export class ShowService {
  private url: string = "http://localhost:4000/showdetails";
  constructor(private http: HttpClient) {}

  showDetail(): Observable<ShowDetailModel[]> {
    return this.http.post<ShowDetailModel[]>(this.url, {});
  }

  async searchShow(id) {
    var url = `http://api.tvmaze.com/shows/${id}`;
    var response = await fetch(url);
    var data = await response.json();
    return data;
  }

  async searchEpisode(id) {
    var url = `http://api.tvmaze.com/shows/${id}/episodes`;
    var response = await fetch(url);
    var data = await response.json();
    return data;
  }

  filterShows(id) {
    let array1 = [];
    let array2 = [];
    this.searchShow(id).then((result) => {
      array1.push(result);
    });
    this.searchEpisode(id).then((result) => {
      array2.push(result);
    });
    return [array1, array2];
  }
}

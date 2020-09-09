import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GetShowModel } from "./watch-list.model";
import { Observable } from "rxjs";

@Injectable()
export class WatchListService {
  private url: string = "http://localhost:4000/getshows";
  private url1: string = "http://localhost:4000/showdetails";
  constructor(private http: HttpClient) {}

  getShows(email): Observable<GetShowModel[]> {
    return this.http.post<GetShowModel[]>(this.url, { email });
  }

  showDetail(show): Observable<GetShowModel[]> {
    return this.http.post<GetShowModel[]>(this.url1, { show });
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

  async searchNextEpisode(url) {
    var response = await fetch(url);
    var data = await response.json();
    return data;
  }

  filterShows(data) {
    let array = [];
    for (let i = 0; i < data.length; i++) {
      this.searchShow(data[i]["showId"]).then((result) => {
        array.push(result);
      });
    }
    return array;
  }

  filterUpcoming(data) {
    let array = [];
    for (let i = 0; i < data.length; i++) {
      this.searchShow(data[i]["showId"]).then((data1) => {
        if (data1._links.nextepisode) {
          this.searchNextEpisode(data1._links.nextepisode.href).then(
            (data2) => {
              let data3 = this.filterDate(data2.airstamp);
              array.push({ data1, data2, data3 });
            }
          );
        }
      });
    }
    console.log(array);
    return array;
  }

  filterDate(date) {
    var shour = Number(date.slice(11, 13)) + 1;
    var sday = Number(date.slice(8, 10));
    var smonth = Number(date.slice(5, 7));
    var syear = Number(date.slice(0, 4));

    var date1: any = new Date();
    var date2: any = new Date(`${smonth}/${sday}/${syear}`);
    var diffTime = Math.abs(date2 - date1) / 60 / 1000 + 60 + shour * 60;
    var diffDays = Math.floor(diffTime / (60 * 24));
    diffTime = diffTime - diffDays * 60 * 24;
    var diffHours = Math.floor(diffTime / 60);
    diffTime = diffTime - diffHours * 60;
    var diffmins = Math.floor(diffTime);
    return [diffDays, diffHours, diffmins];
  }
}

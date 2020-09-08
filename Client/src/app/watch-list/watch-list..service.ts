import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GetShowModel } from "./watch-list.model";
import { Observable } from "rxjs";

@Injectable()
export class WatchListService {
  private url: string = "http://localhost:4000/getshows";
  constructor(private http: HttpClient) {}

  getShows(email): Observable<GetShowModel[]> {
    return this.http.post<GetShowModel[]>(this.url, { email });
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
    let array1 = [];
    let array2 = [];
    for (let i = 0; i < data.length; i++) {
      this.searchShow(data[i]["showId"]).then((result) => {
        array1.push(result);
      });
      this.searchEpisode(data[i]["showId"]).then((result) => {
        array2.push(result);
      });
    }
    return [array1, array2];
  }

  filterUpcoming(data) {
    let array = [];
    for (let i = 0; i < data.length; i++) {
      this.searchShow(data[i]["showId"]).then((data1) => {
        if (data1._links.nextepisode) {
          this.searchNextEpisode(data1._links.nextepisode.href).then(
            (data2) => {
              array.push({ data1, data2 });
            }
          );
        }
      });
    }
    console.log(array);
    return array;
  }
}

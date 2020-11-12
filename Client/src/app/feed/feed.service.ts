import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FeedModel } from "./feed.model";
import { Observable } from "rxjs";

@Injectable()
export class FeedService {
  private url: string = "http://localhost:4000/feedpost";
  private url1: string = "http://localhost:4000/feedget";
  constructor(private http: HttpClient) {}

  feedPost(feed: any): Observable<FeedModel[]> {
    return this.http.post<FeedModel[]>(this.url, { feed });
  }

  feedGet(email: any): Observable<FeedModel[]> {
    return this.http.post<FeedModel[]>(this.url1, { email });
  }

  TimeDate() {
    var today = new Date();
    var date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var TD = time + "|" + date;
    return TD;
  }
}

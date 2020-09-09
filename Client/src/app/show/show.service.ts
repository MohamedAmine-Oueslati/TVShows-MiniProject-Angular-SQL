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
}

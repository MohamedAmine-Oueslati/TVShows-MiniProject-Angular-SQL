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
  epChecked(str: any, email: any, showId: any): Observable<ShowDetailModel[]> {
    return this.http.post<ShowDetailModel[]>(this.url5, { str, email, showId });
  }

  filterCheck(email: any, showId: any): Observable<ShowDetailModel[]> {
    return this.http.post<ShowDetailModel[]>(this.url6, { email, showId });
  }
}

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ShowsModel, SearchModel } from "./icons.model";

@Component({
  selector: "app-icons",
  templateUrl: "./icons.component.html",
  styleUrls: ["./icons.component.css"],
})
export class IconsComponent implements OnInit {
  public shows: any;
  public searched: any;
  public query: string;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<ShowsModel[]>("http://localhost:4000/fetchshows")
      .subscribe((data) => {
        console.log(data);
        this.shows = data;
      });
  }

  onSubmit() {
    return this.query;
  }

  searchShow() {
    console.log(this.query);
    this.http
      .post<SearchModel[]>("http://localhost:4000/searchshows", {
        query: this.query,
      })
      .subscribe((data) => {
        console.log(data);
        this.searched = data;
      });
  }
  // constructor(private iconsService: IconsService) {}

  // ngOnInit() {
  //   this.iconsService.getShows()
  //     .subscribe((data) => {
  //       console.log(data);
  //       this.shows = data;
  //     });
  // }
}

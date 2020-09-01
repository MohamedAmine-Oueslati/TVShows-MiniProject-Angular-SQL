import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ShowsModel, SearchModel } from "./explore.model";

@Component({
  selector: "app-explore",
  templateUrl: "./explore.component.html",
  styleUrls: ["./explore.component.css"],
})
export class ExploreComponent implements OnInit {
  public show: any;
  public searched: any;
  public query: string;
  public detail: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.http
    //   .get<ShowsModel[]>("http://localhost:4000/fetchshows")
    //   .subscribe((data) => {
    //     console.log(data);
    //     this.shows = data;
    //   });
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

  toggleDetail(element) {
    this.detail = !this.detail;

    let index = this.searched.indexOf(element);
    this.show = this.searched[index];
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

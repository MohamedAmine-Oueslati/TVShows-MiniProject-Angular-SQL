import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { showsModel } from "./icons.model";

@Component({
  selector: "app-icons",
  templateUrl: "./icons.component.html",
  styleUrls: ["./icons.component.css"],
})
export class IconsComponent implements OnInit {
  public shows = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<showsModel[]>("http://localhost:4200/fetchshows")
      .subscribe((data) => {
        console.log(data);
        this.shows = data;
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

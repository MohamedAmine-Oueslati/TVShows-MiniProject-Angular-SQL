import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SearchModel, AddShowModel } from "./explore.model";
import { AuthService } from "./../auth.service";

@Component({
  selector: "app-explore",
  templateUrl: "./explore.component.html",
  styleUrls: ["./explore.component.css"],
})
export class ExploreComponent implements OnInit {
  public user: any;
  public show: any;
  public searched: any;
  public query: string;
  public detail: boolean = false;
  public status: boolean = false;
  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit() {
    this.authService.profile().subscribe(
      (user) => {
        console.log(user);
        this.user = user;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  searchShow() {
    this.http
      .post<SearchModel[]>("http://localhost:4000/searchshows", {
        query: this.query,
      })
      .subscribe((data) => {
        this.searched = data;
      });
  }

  toggleDetail(element) {
    this.detail = !this.detail;

    let index = this.searched.indexOf(element);
    this.show = this.searched[index];
    this.http
      .post<AddShowModel[]>("http://localhost:4000/status", {
        showId: this.show.show.id,
        email: this.user.email,
      })
      .subscribe((data) => {
        this.status = data["status"];
      });
  }

  toggleAdd(element) {
    this.status = true;
    this.http
      .post<AddShowModel[]>("http://localhost:4000/addshow", {
        showId: element.show.id,
        email: this.user.email,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }

  toggleRemove(element) {
    this.status = false;
    this.http
      .post<AddShowModel[]>("http://localhost:4000/removeshow", {
        showId: element.show.id,
        email: this.user.email,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}

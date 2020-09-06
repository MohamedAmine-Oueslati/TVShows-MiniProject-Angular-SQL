import { GetShowModel } from "./watch-list.model";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-watch-list",
  templateUrl: "./watch-list.component.html",
  styleUrls: ["./watch-list.component.css"],
})
export class WatchListComponent implements OnInit {
  public user: any;
  public shows: any;
  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit() {
    this.authService.profile().subscribe(
      (user) => {
        console.log(user);
        this.user = user;
        this.http
          .post<GetShowModel[]>("http://localhost:4000/getshows", {
            email: user.email,
          })
          .subscribe((data) => {
            this.shows = data["data"];
          });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

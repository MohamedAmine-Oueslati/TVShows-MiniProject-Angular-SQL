import { Router } from "@angular/router";
import { WatchListService } from "./watch-list..service";
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
  public active: number = 1;
  public user: any;
  public shows: any;
  public detail: boolean = false;
  constructor(
    private authService: AuthService,
    private watchlistService: WatchListService,
    private router: Router
  ) {}

  activeList(num) {
    this.active = num;
  }

  ngOnInit() {
    this.authService.profile().subscribe(
      (user) => {
        console.log(user);
        this.user = user;
        this.watchlistService.getShows(user.email).subscribe((data) => {
          this.shows = this.watchlistService.filterShows(data);
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  details(show) {
    this.router.navigateByUrl("/user/show");
    this.detail = true;
    this.watchlistService.showDetail(show).subscribe((data) => {
      console.log("data sent");
    });
  }
}

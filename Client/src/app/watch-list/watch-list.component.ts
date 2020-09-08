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
  public episodes: any;
  public showSelected: any;
  public episodeSelected: any;
  public detail: boolean = false;
  constructor(
    private authService: AuthService,
    private watchlistService: WatchListService
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
          let arr = this.watchlistService.filterShows(data);
          this.shows = arr[0];
          this.episodes = arr[1];
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  details(show) {
    this.detail = true;
    this.showSelected = show;
    let index = this.shows.indexOf(show);
    this.episodeSelected = this.episodes[index];
    console.log(show);
    console.log(this.episodes[index]);
  }
}

import { WatchListService } from "./../watch-list/watch-list..service";
import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-upcoming",
  templateUrl: "./upcoming.component.html",
  styleUrls: ["./upcoming.component.css"],
})
export class UpcomingComponent implements OnInit {
  public shows: any;
  constructor(
    private authService: AuthService,
    private watchlistService: WatchListService
  ) {}

  ngOnInit() {
    this.authService.profile().subscribe(
      (user) => {
        this.watchlistService.getShows(user.email).subscribe((data) => {
          let arr = this.watchlistService.filterUpcoming(data);
          this.shows = arr;
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

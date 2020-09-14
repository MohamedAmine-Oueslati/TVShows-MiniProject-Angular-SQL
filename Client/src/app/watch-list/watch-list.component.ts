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
  public allShows: any;
  public notStarted: any;
  public fin: any;
  public finished: any;
  public next: any;
  public nextWatch: any;
  public detail: boolean = false;
  constructor(
    private authService: AuthService,
    private watchlistService: WatchListService,
    private router: Router
  ) {}

  activeList(num) {
    this.active = num;

    this.finished = this.watchlistService.filterShows(this.fin);
    console.log(this.next);
    this.nextWatch = this.watchlistService.filterNext(this.next);
  }

  ngOnInit() {
    this.authService.profile().subscribe(
      (user) => {
        console.log(user);
        this.user = user;
        this.watchlistService.getShows(user.email).subscribe((data) => {
          this.allShows = this.watchlistService.filterShows(data);
        });
        this.watchlistService.notstarted(user.email).subscribe((data) => {
          this.notStarted = this.watchlistService.filterShows(data);
        });
        this.watchlistService.finished(user.email).subscribe((data) => {
          this.fin = this.watchlistService.finishedShow(data);
        });
        this.watchlistService.finished(user.email).subscribe((data) => {
          this.next = this.watchlistService.watchNext(data);
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  details(show) {
    this.router.navigate(["/user/show", { id: show.id }]);
    this.detail = true;
  }
}

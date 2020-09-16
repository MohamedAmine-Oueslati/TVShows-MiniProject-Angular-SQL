import { AuthService } from "./../auth.service";
import { ActivatedRoute } from "@angular/router";
import { ShowService } from "./show.service";
import { Component, OnInit } from "@angular/core";
import { combineLatest } from "rxjs";

@Component({
  selector: "app-show",
  templateUrl: "./show.component.html",
  styleUrls: ["./show.component.css"],
})
export class ShowComponent implements OnInit {
  public user: any;
  public show: any;
  public episodes: any;
  public seasons: any;
  public casts: any;
  public selected: any = "season 1";
  constructor(
    private showService: ShowService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.profile().subscribe((user) => {
      this.user = user;
    });
    this.route.params.subscribe((data) => {
      console.log(data);
      this.show = data;
      combineLatest(
        this.showService.filterepisodes(data.id),
        this.showService.filterseasons(data.id),
        this.showService.filtercast(data.id)
      ).subscribe(([data2, data3, data4]) => {
        this.episodes = data2["episodes"];
        this.seasons = data3["seasons"];
        this.casts = data4["cast"];
      });
    });
  }
}

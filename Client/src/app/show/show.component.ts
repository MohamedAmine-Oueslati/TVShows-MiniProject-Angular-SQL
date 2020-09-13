import { ActivatedRoute } from "@angular/router";
import { ShowService } from "./show.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-show",
  templateUrl: "./show.component.html",
  styleUrls: ["./show.component.css"],
})
export class ShowComponent implements OnInit {
  public show: any;
  public episodes: any;
  public seasons: any;
  public casts: any;
  public selected: any = "season 1";
  constructor(
    private showService: ShowService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    this.showService.filtershows(id).subscribe((data) => {
      this.show = data["shows"];
    });
    this.showService.filterepisodes(id).subscribe((data) => {
      console.log(data);
      this.episodes = data["episodes"];
    });
    this.showService.filterseasons(id).subscribe((data) => {
      this.seasons = data["seasons"];
    });
    this.showService.filtercast(id).subscribe((data) => {
      console.log(data);
      this.casts = data["cast"];
    });
  }
}

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
  constructor(
    private showService: ShowService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    let data = this.showService.filterShows(id);
    this.show = data[0];
    this.episodes = data[1];
    console.log(data[1]);
  }
}

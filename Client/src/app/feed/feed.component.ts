import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"],
})
export class FeedComponent implements OnInit {
  public active: number = 1;

  constructor() {}

  ngOnInit(): void {}

  activeList(num) {
    this.active = num;
  }
}

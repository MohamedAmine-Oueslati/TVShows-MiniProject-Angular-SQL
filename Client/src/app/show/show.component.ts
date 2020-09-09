import { ShowService } from "./show.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-show",
  templateUrl: "./show.component.html",
  styleUrls: ["./show.component.css"],
})
export class ShowComponent implements OnInit {
  constructor(private showService: ShowService) {}

  ngOnInit() {
    this.showService.showDetail().subscribe((data) => {
      console.log(data);
    });
  }
}

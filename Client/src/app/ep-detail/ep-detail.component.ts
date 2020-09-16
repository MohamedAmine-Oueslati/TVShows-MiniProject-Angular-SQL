import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ep-detail",
  templateUrl: "./ep-detail.component.html",
  styleUrls: ["./ep-detail.component.css"],
})
export class EpDetailComponent implements OnInit {
  public name: any;
  public number: any;
  public season: any;
  public image: any;
  public airdate: any;
  public summary: any;
  public show: any;
  public status: any = false;
  constructor(private activatedroute: ActivatedRoute) {
    this.activatedroute.params.subscribe((data) => {
      console.log(data);
      this.show = data.show;
      this.name = data.name;
      this.number = data.number;
      this.season = data.season;
      this.summary = data.summary;
      this.image = data.img;
      this.airdate = data.airdate;
    });
  }

  toggleAdd() {
    this.status = !this.status;
  }

  toggleRemove() {
    this.status = !this.status;
  }
  ngOnInit() {}
}

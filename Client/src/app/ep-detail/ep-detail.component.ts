import { AuthService } from "./../auth.service";
import { ShowService } from "./../show/show.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ep-detail",
  templateUrl: "./ep-detail.component.html",
  styleUrls: ["./ep-detail.component.css"],
})
export class EpDetailComponent implements OnInit {
  public user: any;
  public id: any;
  public name: any;
  public number: any;
  public season: any;
  public image: any;
  public airdate: any;
  public summary: any;
  public show: any;
  public status: any = false;
  public disable: any;
  constructor(
    private showService: ShowService,
    private authService: AuthService,
    private activatedroute: ActivatedRoute
  ) {}

  toggle() {
    this.status = !this.status;
    let str = this.season + "." + this.number;
    this.showService
      .epChecked(str, this.user.email, this.id)
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnInit() {
    this.activatedroute.params.subscribe((data) => {
      console.log(data);
      this.id = data.id;
      this.show = data.show;
      this.name = data.name;
      this.number = data.number;
      this.season = data.season;
      this.summary = data.summary;
      if (data.img == null) {
        this.image = "https://i.postimg.cc/26wRQDRK/noimageavailable.png";
      } else {
        this.image = data.img;
      }
      this.airdate = data.airdate;
      let current: any = new Date();
      let next: any = new Date(data.airdate);
      this.disable = current - next < 0;
      this.authService.profile().subscribe((user) => {
        this.user = user;
        this.showService
          .filterCheck(user.email, data.id)
          .subscribe((result) => {
            let check = result["check"];
            if (check.includes(data.season + "." + data.number)) {
              this.status = true;
            }
          });
      });
    });
  }
}

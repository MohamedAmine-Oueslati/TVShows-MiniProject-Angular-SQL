import { AuthService } from "./../auth.service";
import { ActivatedRoute } from "@angular/router";
import { ShowService } from "./show.service";
import { Component, OnInit } from "@angular/core";

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
  public checked: any = [];
  public isChecked: any = [];
  public selected: any = "season 1";
  constructor(
    private showService: ShowService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.profile().subscribe(
      (user) => {
        this.user = user;
        this.showService.filterCheck(user.email, id).subscribe((data) => {
          this.isChecked = data["check"];
        });
      },
      (err) => {
        console.log(err);
      }
    );
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
    console.log(this.isChecked);
  }
  select(i, j) {
    let val = i + "." + j;
    if (this.checked.includes(val)) {
      let idx = this.checked.indexOf(val);
      this.checked.splice(idx, 1);
    } else {
      this.checked.push(val);
    }
    this.showService
      .epChecked(this.checked, this.user.email, this.show.id)
      .subscribe((data) => {
        console.log(data);
      });
  }
}

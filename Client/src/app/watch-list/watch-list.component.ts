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
  public shows: any;
  public episodes: any;
  constructor(private authService: AuthService, private http: HttpClient) {}

  activeList(num) {
    this.active = num;
  }

  ngOnInit() {
    this.authService.profile().subscribe(
      (user) => {
        console.log(user);
        this.user = user;
        this.http
          .post<GetShowModel[]>("http://localhost:4000/getshows", {
            email: user.email,
          })
          .subscribe((data) => {
            let array1 = [];
            let array2 = [];
            for (let i = 0; i < data.length; i++) {
              this.searchShow(data[i]["showId"]).then((result) => {
                array1.push(result);
              });
              this.searchEpisode(data[i]["showId"]).then((result) => {
                array2.push(result);
              });
            }
            console.log(array1);
            console.log(array2);
            this.shows = array1;
            this.episodes = array2;
          });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  async searchShow(id) {
    var url = `http://api.tvmaze.com/shows/${id}`;
    var response = await fetch(url);
    var data = await response.json();
    return data;
  }

  async searchEpisode(id) {
    var url = `http://api.tvmaze.com/shows/${id}/episodes`;
    var response = await fetch(url);
    var data = await response.json();
    return data;
  }
}

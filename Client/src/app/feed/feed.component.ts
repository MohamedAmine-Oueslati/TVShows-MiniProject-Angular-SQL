import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { FeedService } from "./feed.service";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"],
})
export class FeedComponent implements OnInit {
  public user: any;
  public active: number = 1;
  public feed: string;
  public posts: any;
  public likes: number = 0;
  public image: string = null;

  constructor(
    private authService: AuthService,
    private feedService: FeedService
  ) {}
  ngOnInit() {
    this.authService.profile().subscribe(
      (user) => {
        console.log(user);
        this.user = user;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  activeList(num) {
    this.active = num;
  }

  post() {
    console.log(this.feed);
    this.feedService
      .feedPost({
        message: this.feed,
        likes: this.likes,
        email: this.user.email,
        image: this.image,
        username: this.user.username,
        time: this.feedService.TimeDate(),
      })
      .subscribe((data) => {
        this.posts = data;
      });
    this.feed = "";
  }
}

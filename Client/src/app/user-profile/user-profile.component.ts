import { AuthService, UserDetails } from "./../auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent {
  details: UserDetails;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.profile().subscribe(
      (user) => {
        console.log(user);
        this.details = user;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

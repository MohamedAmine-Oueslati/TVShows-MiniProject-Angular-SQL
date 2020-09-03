import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService, TokenPayload } from "../../auth.service";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"],
})
export class LogInComponent {
  credentials: TokenPayload = {
    id: 0,
    email: "",
    username: "",
    password: "",
    fullName: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    aboutMe: "",
  };
  invalidLogin: boolean;

  constructor(private router: Router, private authService: AuthService) {}

  // onSubmit() {
  //   return this.credentials.email, this.credentials.password;
  // }

  login() {
    this.authService.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/dashboard");
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

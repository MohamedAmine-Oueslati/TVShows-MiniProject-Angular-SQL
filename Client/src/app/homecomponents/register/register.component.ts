import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { RegisterModel } from "./register.model";
import { AuthService, TokenPayload } from "../../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  auth: any;
  invalidRegister: boolean;
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

  register() {
    this.authService.register(this.credentials).subscribe(
      (res) => {
        console.log(res);
        this.router.navigateByUrl("/user/dashboard");
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // onSubmit() {
  //   return this.email, this.username, this.password;
  // }
  // authregister() {
  //   if (this.email && this.username && this.password) {
  //     this.http
  //       .post<RegisterModel[]>("http://localhost:4000/users/register", {
  //         email: this.email,
  //         username: this.username,
  //         password: this.password,
  //       })
  //       .subscribe((data) => {
  //         console.log(data);
  //         if (data["token"]) {
  //           this.router.navigateByUrl("/login");
  //         } else {
  //           this.invalidRegister = true;
  //         }
  //       });
  //   } else {
  //     this.invalidRegister = true;
  //   }
  // }
}

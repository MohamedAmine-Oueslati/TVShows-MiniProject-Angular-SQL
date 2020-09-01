import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { RegisterModel } from "./register.model";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  public email: string;
  public username: string;
  public password: string;
  public auth: any;
  public invalidRegister: boolean;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    return this.email, this.username, this.password;
  }
  authregister() {
    console.log(this.email, this.username, this.password);
    this.http
      .post<RegisterModel[]>("http://localhost:4000/users/register", {
        email: this.email,
        username: this.username,
        password: this.password,
      })
      .subscribe((data) => {
        console.log(data);
        if (data["token"]) {
          this.router.navigateByUrl("/login");
        } else {
          this.invalidRegister = true;
        }
      });
  }
}

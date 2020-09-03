import { HttpClient } from "@angular/common/http";
import { UpdateModel } from "./update.model";
import { AuthService, UserDetails } from "./../auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent {
  details: UserDetails;
  data: any = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    aboutMe: "",
  };
  constructor(private authService: AuthService, private http: HttpClient) {}
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
  onSubmit() {
    return (
      this.data.firstName,
      this.data.lastName,
      this.data.address,
      this.data.city,
      this.data.country,
      this.data.zipCode,
      this.data.aboutMe
    );
  }
  update() {
    this.data.id = this.details.id;
    this.http
      .post<UpdateModel[]>("http://localhost:4000/update", this.data)
      .subscribe((data) => {
        console.log(data);
      });
  }
}

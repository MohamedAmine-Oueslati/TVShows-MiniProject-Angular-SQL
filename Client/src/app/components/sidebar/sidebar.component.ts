import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/user-profile",
    title: "User Profile",
    icon: "users_single-02",
    class: "",
  },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "ui-1_bell-53",
    class: "",
  },
  {
    path: "/watch-list",
    title: "Watch List",
    icon: "design_bullet-list-67",
    class: "",
  },
  {
    path: "/upcoming",
    title: "Upcoming",
    icon: "ui-1_calendar-60",
    class: "",
  },
  { path: "/explore", title: "Explore", icon: "ui-1_zoom-bold", class: "" },
  { path: "/feed", title: "Feed", icon: "tech_laptop", class: "" },
  { path: "/dashboard", title: "Dashboard", icon: "design_app", class: "" },
  // { path: "/show", title: "Show", icon: "design_app", class: "" },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}

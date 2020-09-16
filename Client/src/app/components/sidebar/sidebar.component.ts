import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/user/user-profile",
    title: "User Profile",
    icon: "users_single-02",
    class: "",
  },
  // {
  //   path: "/user/notifications",
  //   title: "Notifications",
  //   icon: "ui-1_bell-53",
  //   class: "",
  // },
  {
    path: "/user/watch-list",
    title: "Watch List",
    icon: "design_bullet-list-67",
    class: "",
  },
  {
    path: "/user/upcoming",
    title: "Upcoming",
    icon: "ui-1_calendar-60",
    class: "",
  },
  {
    path: "/user/explore",
    title: "Explore",
    icon: "ui-1_zoom-bold",
    class: "",
  },
  { path: "/user/feed", title: "Feed", icon: "tech_laptop", class: "" },
  {
    path: "/user/dashboard",
    title: "Dashboard",
    icon: "design_app",
    class: "",
  },
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

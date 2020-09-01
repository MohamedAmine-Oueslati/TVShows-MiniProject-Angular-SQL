import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { WatchListComponent } from "../../watch-list/watch-list.component";
import { UpcomingComponent } from "../../upcoming/upcoming.component";
import { ExploreComponent } from "../../explore/explore.component";
import { FeedComponent } from "../../feed/feed.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { ShowComponent } from "../../show/show.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "watch-list", component: WatchListComponent },
  { path: "upcoming", component: UpcomingComponent },
  { path: "explore", component: ExploreComponent },
  { path: "feed", component: FeedComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "show", component: ShowComponent },
];

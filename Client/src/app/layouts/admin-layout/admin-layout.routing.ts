import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { FeedComponent } from "../../feed/feed.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { ShowComponent } from "../../show/show.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "watch-list", component: TableListComponent },
  { path: "upcoming", component: TypographyComponent },
  { path: "explore", component: IconsComponent },
  { path: "feed", component: FeedComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "show", component: ShowComponent },
];

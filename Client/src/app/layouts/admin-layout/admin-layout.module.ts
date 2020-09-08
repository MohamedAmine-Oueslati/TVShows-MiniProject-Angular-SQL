import { EpisodesPipe } from "./../../episode.pipe";
import { SummaryPipe } from "./../../summary.pipe";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { WatchListComponent } from "../../watch-list/watch-list.component";
import { UpcomingComponent } from "../../upcoming/upcoming.component";
import { ExploreComponent } from "../../explore/explore.component";
import { FeedComponent } from "../../feed/feed.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { ChartsModule } from "ng2-charts/ng2-charts";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { ShowComponent } from "../../show/show.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    WatchListComponent,
    UpcomingComponent,
    ExploreComponent,
    FeedComponent,
    ShowComponent,
    NotificationsComponent,
    SummaryPipe,
    EpisodesPipe,
  ],
})
export class AdminLayoutModule {}

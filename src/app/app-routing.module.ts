import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
    DETAILED_OVERVIEWPATH,
    GENERAL_OVERVIEWPATH,
    OVERVIEWPATH,
    REJECTION_BACKLOGPATH
} from "./shared/constants/path.constant";
import {OverviewComponent} from "./features/overview/views/overview/overview.component";
import {
    DetailedOverviewComponent
} from "./features/overview/views/detailed-overview.component/detailed-overview.component";
import {
    GeneralOverviewComponent
} from "./features/overview/views/general-overview-component/general-overview.component";
import {
    RejectionBacklogComponent
} from "./features/rejection-backlog/views/rejection-backlog.component/rejection-backlog.component";

const routes: Routes = [
    {
        path: OVERVIEWPATH,
        component: OverviewComponent,
        children: [
            { path: GENERAL_OVERVIEWPATH, component: GeneralOverviewComponent },
            { path: DETAILED_OVERVIEWPATH, component: DetailedOverviewComponent },
        ]
    },
    {path: REJECTION_BACKLOGPATH, component: RejectionBacklogComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

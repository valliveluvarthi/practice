import { CalenderComponent } from "./calender/calender.component";
import { HomeComponent } from "./home/home.component";
export const DASHBOARD_ROUTES = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'calender',
                component: CalenderComponent
            },
        ]
    },

];

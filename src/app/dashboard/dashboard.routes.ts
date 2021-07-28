import { ContactsComponent } from "./contacts/contacts.component";
import { HomeComponent } from "./home/home.component";
export const DASHBOARD_ROUTES = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'contacts',
                component: ContactsComponent
            },
        ]
    },

];

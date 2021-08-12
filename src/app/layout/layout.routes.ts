import { AppLayoutComponent } from './app-layout/app-layout.component';
import { DASHBOARD_ROUTES } from '../dashboard/dashboard.routes';
export const LAYOUT_ROUTES = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
    ]
  },
  {
    path : "dashboard",
    children : DASHBOARD_ROUTES
  }
  
];

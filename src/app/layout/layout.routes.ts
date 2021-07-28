import { AppLayoutComponent } from './app-layout/app-layout.component';
import { UserloginComponent } from '../auth/userlogin/userlogin.component'
import {ForgotpasswordComponent} from '../auth/forgotpassword/forgotpassword.component';
import {RecoverpasswordComponent} from '../auth/recoverpassword/recoverpassword.component';
import {ChangeemailComponent} from '../auth/changeemail/changeemail.component';
import { DASHBOARD_ROUTES } from '../dashboard/dashboard.routes';
export const LAYOUT_ROUTES = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'userlogin',
        component: UserloginComponent
      },
      {
        path: 'forgotpassword',
        component: ForgotpasswordComponent
      },
      {
        path: 'recoverpassword',
        component : RecoverpasswordComponent
      },
      {
        path: 'changeemail',
        component : ChangeemailComponent
      }
    ]
  },
  {
    path : "dashboard",
    children : DASHBOARD_ROUTES
  }
  
];

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { UserloginComponent } from '../shared/userlogin/userlogin.component'
import {ForgotpasswordComponent} from '../shared/forgotpassword/forgotpassword.component';
import {RecoverpasswordComponent} from '../shared/recoverpassword/recoverpassword.component';
import {ChangeemailComponent} from '../shared/changeemail/changeemail.component';
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
  
];

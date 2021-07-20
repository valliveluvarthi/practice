import { LAYOUT_ROUTES } from './layout/layout.routes';

export const APP_ROUTES = [
  {
    path: '',
    children: LAYOUT_ROUTES,//default  application. Layout refers to common app layout.
  },
  {
    path: '**',
    redirectTo: ''
  }
];

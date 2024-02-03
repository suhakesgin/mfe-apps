import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'search-client',
    loadChildren: () => import('./search-client-remote-entry/entry.module'),
  },
];

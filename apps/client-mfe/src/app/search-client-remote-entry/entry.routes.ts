import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@mfe-apps/client-main').then((m) => m.ClientMainModule),
  },
];

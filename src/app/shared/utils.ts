<<<<<<< HEAD

import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { Params, RouterStateSnapshot } from '@angular/router';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer,
} from '@ngrx/router-store';
=======
// In a custom serializer ts file
import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
>>>>>>> 1-auth

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

<<<<<<< HEAD
export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

=======
>>>>>>> 1-auth
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

<<<<<<< HEAD
    const { url, root: { queryParams } } = routerState;
=======
    const {
      url,
      root: { queryParams },
    } = routerState;
>>>>>>> 1-auth
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

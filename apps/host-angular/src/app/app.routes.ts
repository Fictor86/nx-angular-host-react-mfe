import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { NotFoundError } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'microfront-angular',
    loadChildren: () =>
      loadRemoteModule('microfront-angular', './Module').then(
        (m) => m.RemoteEntryForLocalMfeAg
      ),
  },
  {
    path: 'http-mfe-angular',
    loadComponent: () =>
      loadRemoteModule('http-mfe-angular', './Module').then(
        (m) => m.RemoteEntryComponent
      ),
  },
  {
    path: 'a14-remote',
    loadComponent: () =>
      loadRemoteModule('a14-remote', './Module').then(
        (m) => m.RemoteEntryComponent
      ),
  },
  {
    path: 'http-mfe-react',
    component: WebComponentWrapper,
    data: {
      remoteEntry: `${environment.REMOTE_ENTRY_MFE_RT}`,
      remoteName: 'http_mfe_react',
      exposedModule: './web-components',
      elementName: 'http-mfe-react-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      remoteEntry: `${environment.REMOTE_ENTRY_MFE_RT_ARCHITECTS}`,
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'vue',
    component: WebComponentWrapper,
    data: {
      remoteEntry: `${environment.REMOTE_ENTRY_MFE_VUE_ARCHITECTS}`,
      remoteName: 'vue',
      exposedModule: './web-components',
      elementName: 'vue-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: '**',
    component: NotFoundError,
  },
];

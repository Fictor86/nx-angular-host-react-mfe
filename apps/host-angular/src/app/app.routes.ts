import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { NotFoundError } from 'rxjs';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'microfront-angular',
    loadChildren: () =>
      loadRemoteModule('microfront-angular', './Module').then(
        (m) => m.RemoteEntryMfNg
      ),
  },
  {
    path: 'microfront-react',
    component: WebComponentWrapper,
    data: {
      // type: 'module',
      remoteEntry:
        'http://localhost:4301/remoteEntry.js',
      remoteName: 'microfront-react',
      elementName: 'microfront-react',
      exposedModule: './Module',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      remoteEntry:
        'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      elementName: 'react-element',
      exposedModule: './web-components',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'vue',
    component: WebComponentWrapper,
    data: {
      remoteEntry:
        'https://mango-field-0d0778c10.azurestaticapps.net/remoteEntry.js',
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

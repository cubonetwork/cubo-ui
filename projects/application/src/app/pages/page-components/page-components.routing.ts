import { LibTemplateComponent } from '@app/components/lib-template/lib-template.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { PageComponentsComponent } from './page-components.component';


export const PageComponentsRoutes: Routes = [
  {
    path: '',
    canActivateChild: [MetaGuard],
    component: PageComponentsComponent,
    children: [
      {
        path: '',
        loadChildren: '@app/pages/page-components/page-home/page-home.module#PageHomeModule',
        data: {
          meta: { title: 'Home' }
        }
      },
      {
        path: '',
        component: LibTemplateComponent,
        children: [
          {
            path: 'avatar',
            loadChildren: '@app/pages/page-components/page-avatar/page-avatar.module#PageAvatarModule',
            data: {
              meta: { title: 'Avatar' }
            }
          },
          {
            path: 'card',
            loadChildren: '@app/pages/page-components/page-card/page-card.module#PageCardModule',
            data: {
              meta: { title: 'Card' }
            }
          },
          {
            path: 'social',
            loadChildren: '@app/pages/page-components/page-social/page-social.module#PageSocialModule',
            data: {
              meta: { title: 'social' }
            }
          },
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(PageComponentsRoutes)],
  exports: [RouterModule]
})
export class PageComponentsRouting { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { PageComponentsComponent } from '@app/pages/components/components.component';

export const PageComponentsRoutes: Routes = [
  {
    path: '',
    canActivateChild: [MetaGuard],
    component: PageComponentsComponent,
    children: [
      { path: '', redirectTo: 'avatar', pathMatch: 'full' },
      {
        path: 'avatar',
        loadChildren: '@app/pages/components/avatar/avatar.module#PageAvatarModule',
        data: {
          meta: { title: 'Avatar' }
        }
      },
      {
        path: 'card',
        loadChildren: '@app/pages/components/card/card.module#PageCardModule',
        data: {
          meta: { title: 'Card' }
        }
      },
      {
        path: 'social',
        loadChildren: '@app/pages/components/social/social.module#PageSocialModule',
        data: {
          meta: { title: 'social' }
        }
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(PageComponentsRoutes)],
  exports: [RouterModule]
})
export class PageComponentsRouting { }

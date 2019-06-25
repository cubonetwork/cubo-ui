import { LibTemplateComponent } from './lib-template/lib-template.component';
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
        loadChildren: () => import('@app/pages/page-components/page-home/page-home.module').then(m => m.PageHomeModule),
        data: {
          meta: { title: 'Home' }
        }
      },
      {
        path: '',
        component: LibTemplateComponent,
        children: [
          {
            path: 'accordion',
            loadChildren: () => import('@app/pages/page-components/page-accordion/page-accordion.module').then(m => m.PageAccordionModule),
            data: {
              meta: { title: 'Accordion' }
            }
          },
          {
            path: 'avatar',
            loadChildren: () => import('@app/pages/page-components/page-avatar/page-avatar.module').then(m => m.PageAvatarModule),
            data: {
              meta: { title: 'Avatar' }
            }
          },
          {
            path: 'card',
            loadChildren: () => import('@app/pages/page-components/page-card/page-card.module').then(m => m.PageCardModule),
            data: {
              meta: { title: 'Card' }
            }
          },
          {
            path: 'carousel',
            loadChildren: () => import('@app/pages/page-components/page-carousel/page-carousel.module').then(m => m.PageCarouselModule),
            data: {
              meta: { title: 'Carousel' }
            }
          },
          {
            path: 'chip',
            loadChildren: () => import('@app/pages/page-components/page-chip/page-chip.module').then(m => m.PageChipModule),
            data: {
              meta: { title: 'Chip' }
            }
          },
          {
            path: 'flag',
            loadChildren: () => import('@app/pages/page-components/page-flag/page-flag.module').then(m => m.PageFlagModule),
            data: {
              meta: { title: 'Flag' }
            }
          },
          {
            path: 'highlight',
            loadChildren: () => import('@app/pages/page-components/page-highlight/page-highlight.module').then(m => m.PageHighlightModule),
            data: {
              meta: { title: 'Highlight' }
            }
          },
          {
            path: 'menu',
            loadChildren: () => import('@app/pages/page-components/page-menu/page-menu.module').then(m => m.PageMenuModule),
            data: {
              meta: { title: 'Menu' }
            }
          },
          {
            path: 'social',
            loadChildren: () => import('@app/pages/page-components/page-social/page-social.module').then(m => m.PageSocialModule),
            data: {
              meta: { title: 'Social' }
            }
          },
          {
            path: 'upload-image',
            loadChildren: () => import('@app/pages/page-components/page-upload-image/page-upload-image.module').then(m => m.PageUploadImageModule),
            data: {
              meta: { title: 'UploadImage' }
            }
          }
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

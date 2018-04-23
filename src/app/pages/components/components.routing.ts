import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponentsComponent } from '@app/pages/components/components.component';

export const PageComponentsRoutes: Routes = [
  {
    path: '',
    component: PageComponentsComponent,
    children: [
      { path: '', redirectTo: 'avatar', pathMatch: 'full' },
      { path: 'avatar', loadChildren: '@app/pages/components/avatar/avatar.module#PageAvatarModule' },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(PageComponentsRoutes)],
  exports: [RouterModule]
})
export class PageComponentsRouting { }

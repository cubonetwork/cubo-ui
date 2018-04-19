import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAvatarComponent } from './avatar.component'

export const PageAvatarRoutes: Routes = [
  {
    path: '',
    component: PageAvatarComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(PageAvatarRoutes)],
  exports: [RouterModule]
})
export class PageAvatarRouting { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    children: [
      { path: 'avatar', loadChildren: '@app/pages/components/avatar/avatar.module#PageAvatarModule' },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRouting { }

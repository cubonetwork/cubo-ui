import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'components', pathMatch: 'full' },
      { path: 'components', loadChildren: '@app/pages/page-components/page-components.module#PageComponentsModule' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRouting { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { 
  PageCarouselComponent,
  PageCarouselExampleComponent,
  PageCarouselApiComponent
} from './page-carousel.component';

export const PageCarouselRoutes: Routes = [
  {
    path: '',
    component: PageCarouselExampleComponent,
    outlet: 'example'
  },
  {
    path: '',
    component: PageCarouselApiComponent,
    outlet: 'api'
  },
  {
    path: '',
    component: PageCarouselComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(PageCarouselRoutes)],
  exports: [RouterModule]
})
export class PageCarouselRouting { }

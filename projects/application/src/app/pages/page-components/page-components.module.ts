import { LibTemplateModule } from '@app/components/lib-template/lib-template.module';
import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';
import { NavbarModule } from '@app/components/navbar/navbar.module';

import { PageComponentsRouting } from './page-components.routing';
import { PageComponentsComponent } from './page-components.component';

@NgModule({
  imports: [
    SharedModule,
    PageComponentsRouting,
    NavbarModule,
    LibTemplateModule
  ],
  declarations: [
    PageComponentsComponent
  ],
  providers: []
})
export class PageComponentsModule { }

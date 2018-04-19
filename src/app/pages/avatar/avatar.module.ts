import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { PageAvatarRouting } from './avatar.routing';
import { PageAvatarComponent } from './avatar.component';

@NgModule({
  imports: [
    CommonModule,
    PageAvatarRouting,
    SharedModule
  ],
  declarations: [PageAvatarComponent]
})
export class PageAvatarModule { }

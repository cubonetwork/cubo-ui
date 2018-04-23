import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MetaModule, MetaLoader } from '@ngx-meta/core';
import { metaFactory } from '@app/core/meta.config';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory)
    })
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  declarations: [],
  providers: [
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}

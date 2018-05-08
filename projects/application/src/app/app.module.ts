import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';
import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    HeaderModule,
    RouterModule.forRoot(AppRoutes),
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

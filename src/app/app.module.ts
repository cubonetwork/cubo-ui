import { SharedModule } from '@app/shared/shared.module'
import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core/core.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { CbAvatarModule } from './cb-components/cb-avatar/cb-avatar.module';
import { MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CoreModule,
    MatListModule,
    CbAvatarModule,
    RouterModule.forRoot(AppRoutes),
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { SharedModule } from '@app/shared/shared.module'
import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core/core.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatListModule, MatTabsModule, MatExpansionModule, MatChipsModule, MatCardModule } from '@angular/material';
import { AppRoutes } from './app.routing';
import { CbAvatarModule } from './cb-components/cb-avatar/cb-avatar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    MatListModule,
    MatTabsModule,
    MatExpansionModule,
    MatChipsModule,
    MatCardModule,
    CbAvatarModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

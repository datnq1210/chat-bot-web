import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LoginFormComponent,
  ResetPasswordFormComponent,
  CreateAccountFormComponent,
  ChangePasswordFormComponent,
} from './shared/components';
import { AuthGuardService } from './shared/services';
import { ProfileComponent } from './pages/profile/profile.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { IntentsComponent } from './pages/intents/intents.component';
import { UttersComponent } from './pages/utters/utters.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { HomeComponent } from './pages/home/home.component';
import { ImportExcelComponent } from './pages/import-excel/import-excel.component';

const routes: Routes = [
  {
    path: 'intents',
    component: IntentsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'utters',
    component: UttersComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'stories',
    component: StoriesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'importExcel',
    component: ImportExcelComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    DxDataGridModule,
    DxFormModule,
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent],
})
export class AppRoutingModule {}

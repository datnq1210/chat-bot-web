import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  SideNavOuterToolbarModule,
  SideNavInnerToolbarModule,
  SingleCardModule,
} from './layouts';
import {
  FooterModule,
  ResetPasswordFormModule,
  CreateAccountFormModule,
  ChangePasswordFormModule,
  LoginFormModule,
} from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UttersComponent } from './pages/utters/utters.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { IntentsComponent } from './pages/intents/intents.component';
import { DxButtonModule, DxDataGridModule, DxFileUploaderModule, DxLoadPanelModule, DxPopupModule, DxTextBoxModule } from 'devextreme-angular';
import { DataGridComponent } from './shared/components/data-grid/data-grid.component';
import { PopupSaveComponent } from './shared/components/popup-save/popup-save.component';
import { ImportExcelComponent } from './pages/import-excel/import-excel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UttersComponent,
    StoriesComponent,
    IntentsComponent,
    DataGridComponent,
    PopupSaveComponent,
    ImportExcelComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    DxButtonModule,
    DxPopupModule,
    DxTextBoxModule,
    FormsModule,
    ReactiveFormsModule,
    DxLoadPanelModule,
    DxFileUploaderModule
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent],
})
export class AppModule {}

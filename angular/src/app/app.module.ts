import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { TextPostsComponent } from './components/text-posts/text-posts.component';
import { DataService } from './global/services/data.service';
import { LoginService } from './global/services/login.service';
import { WorksComponent } from './components/works/works.component';
import { AdminComponent } from './components/adminlogin/admin.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { isLoggedInReducer } from './global/reducer/login.reducer';
import { DeleteWarningComponent } from './components/delete-warning/delete-warning.component';
import { AddTextModalComponent } from './components/add-text-modal/add-text-modal.component';
import { AddWorkModalComponent } from './components/add-work-modal/add-work-modal.component';
import { CategoryComponent } from './components/category/category.component';
import { WorksReducer } from './global/reducer/works.reducer';
import { previewMode } from './global/reducer/preview.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TextPostsComponent,
    WorksComponent,
    AdminComponent,
    DeleteWarningComponent,
    AddTextModalComponent,
    AddWorkModalComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModulesPro.forRoot(),
    StoreModule.forRoot({ isLoggedIn: isLoggedInReducer, works: WorksReducer, previewMode: previewMode}),
    ToastModule.forRoot()
  ],
  providers: [DataService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

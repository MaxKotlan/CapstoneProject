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
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { isLoggedInReducer } from './global/reducer/login.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TextPostsComponent,
    WorksComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModulesPro.forRoot(),
    StoreModule.forRoot({ isLoggedIn: isLoggedInReducer}),
    ToastModule.forRoot()
  ],
  providers: [DataService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

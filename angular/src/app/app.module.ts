import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { TextPostsComponent } from './components/text-posts/text-posts.component';
import { DataService } from './services/data.service';
import { LoginService } from './services/login.service';
import { WorksComponent } from './components/works/works.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';

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
    ToastModule.forRoot()
  ],
  providers: [DataService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { isLoggedInReducer } from './global/reducer/login.reducer';
import { DeleteWarningComponent } from './components/delete-warning/delete-warning.component';
import { AddTextModalComponent } from './components/text-posts/add-text-modal/add-text-modal.component';
import { AddWorkModalComponent } from './components/works/add-work-modal/add-work-modal.component';
import { CategoryComponent } from './components/works/category/category.component';
import { WorksReducer } from './global/reducer/works.reducer';
import { previewMode } from './global/reducer/preview.reducer';
import { WorksEffects } from './global/effects/works.effects';
import { AddAdminComponent } from './components/admin/add-admin/add-admin.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { QuillModule } from 'ngx-quill'
import { CategoryEffects } from './global/effects/category.effects';
import { CategoryReducer } from './global/reducer/category.reducer';
import { TextReducer } from './global/reducer/text.reducer';
import { TextEffects } from './global/effects/text.effects';
import { ToastEffects } from './global/effects/toast.effects';
import { LoginComponent } from './components/admin/login/login.component';
import { WorkInstanceDisplaymodeComponent } from './components/works/work-instance-displaymode/work-instance-displaymode.component';
import { WorkInstanceEditmodeComponent } from './components/works/work-instance-editmode/work-instance-editmode.component';
import { CategoryEditmodeComponent } from './components/works/category-editmode/category-editmode.component';
import { CategoryDisplaymodeComponent } from './components/works/category-displaymode/category-displaymode.component';
import { AddCategoryModalComponent } from './components/works/add-category-modal/add-category-modal.component';
import { MaintenenceEffects } from './global/effects/maintenance.effects';
import { MaintenanceReducer } from './global/reducer/maintenance.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TextPostsComponent,
    WorksComponent,
    AdminComponent,
    DeleteWarningComponent,
    AddTextModalComponent,
    AddWorkModalComponent,
    CategoryComponent,
    AddAdminComponent,
    RegisterComponent,
    LoginComponent,
    WorkInstanceDisplaymodeComponent,
    WorkInstanceEditmodeComponent,
    CategoryEditmodeComponent,
    CategoryDisplaymodeComponent,
    AddCategoryModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModulesPro.forRoot(),

    StoreModule.forRoot({ 
      isLoggedIn: isLoggedInReducer, 
      works: WorksReducer, 
      previewMode: previewMode, 
      category: CategoryReducer,
      textposts: TextReducer,
      maintenance: MaintenanceReducer
    }),

    EffectsModule.forRoot([
      WorksEffects, 
      CategoryEffects, 
      TextEffects, 
      ToastEffects,
      MaintenenceEffects
    ]),
    ToastModule.forRoot(),
    QuillModule.forRoot()
  ],
  providers: [DataService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

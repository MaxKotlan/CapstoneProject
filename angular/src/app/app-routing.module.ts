import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextPostsComponent } from './components/text-posts/text-posts.component';
import { WorksComponent } from './components/works/works.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [
  { path: '', component: TextPostsComponent},
  { path: 'works', component: WorksComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'register', component: RegisterComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

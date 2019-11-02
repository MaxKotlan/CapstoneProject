import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextPostsComponent } from './components/text-posts/text-posts.component';
import { WorksComponent } from './components/works/works.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';


const routes: Routes = [
  { path: '', component: TextPostsComponent},
  { path: 'works', component: WorksComponent},
  { path: 'adminlogin', component: AdminloginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

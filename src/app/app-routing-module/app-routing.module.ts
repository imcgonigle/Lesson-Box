import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard-component/dashboard.component';
import { SignInViewComponent} from '../sign-in-view-component/sing-in-view.component';

const routes: Routes = [
  {path: '', redirectTo:'/signin', pathMatch:'full'},
  {path: 'signin', component: SignInViewComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
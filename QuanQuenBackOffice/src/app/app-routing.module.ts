import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MainComponent } from './modules/main/main.component';
import { StoreComponent } from './modules/store/store.component';
import { RewardComponent } from './modules/reward/reward.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'store', component: StoreComponent},
      { path: 'reward', component: RewardComponent},
      { path: 'customer', component: StoreComponent}
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { FinanceComponent } from './finance/finance.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'tasks', component: TasksComponent
  },
  {
    path: 'finance', component: FinanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

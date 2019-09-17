import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MatSidenavModule } from "@angular/material/sidenav";
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatRippleModule,
  MatExpansionModule,
  MatInputModule,
  MatGridListModule
} from "@angular/material";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";

import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SideNavListComponent } from "./side-nav-list/side-nav-list.component";
import { HomeComponent } from "./home/home.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TasksListComponent } from "./tasks/tasks-list/tasks-list.component";
import { TasksCreateComponent } from "./tasks/tasks-create/tasks-create.component";
import { HttpClientModule } from "@angular/common/http";
import { FinanceComponent } from "./finance/finance.component";
import { ExpenseAddComponent } from "./finance/expense-add/expense-add.component";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideNavListComponent,
    HomeComponent,
    TasksComponent,
    TasksListComponent,
    TasksCreateComponent,
    FinanceComponent,
    ExpenseAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatRippleModule,
    MatExpansionModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

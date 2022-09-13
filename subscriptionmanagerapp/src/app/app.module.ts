import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { TestComponent } from './components/test/test.component';
import { EmployeeService } from './service/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

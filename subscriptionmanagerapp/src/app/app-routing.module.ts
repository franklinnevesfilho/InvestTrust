import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'Test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

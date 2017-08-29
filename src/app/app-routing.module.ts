import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { path: 'companies', loadChildren: 'app/company/company.module#CompanyModule' },
  { path: 'suppliers', loadChildren: 'app/suppliers/suppliers.module#SuppliersModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

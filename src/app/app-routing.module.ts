import { SuppliersComponent } from './suppliers/suppliers.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WizardComponent } from './wizard/wizard.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { path: 'companies', component: CompanyComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'wizard', component: WizardComponent }
  // { path: 'companies', loadChildren: 'app/company/company.module#CompanyModule' },
  // { path: 'suppliers', loadChildren: 'app/suppliers/suppliers.module#SuppliersModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

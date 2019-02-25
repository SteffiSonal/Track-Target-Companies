import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TargetCompanyCreateComponent} from './target-company-create/target-company-create.component';
import {TargetCompaniesListComponent} from './target-companies-list/target-companies-list.component';
import {TargetCompanyViewComponent} from './target-company-view/target-company-view.component';
import {TargetCompanyEditComponent} from './target-company-edit/target-company-edit.component';

const routes: Routes = [
  { path: '', component: TargetCompaniesListComponent},
  { path: 'CreateTargetCompany', component: TargetCompanyCreateComponent},
  { path: 'TargetCompaniesList', component: TargetCompaniesListComponent},
  { path: 'ViewTargetCompany/:id', component: TargetCompanyViewComponent},
  { path: 'EditTargetCompany/:id', component: TargetCompanyEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

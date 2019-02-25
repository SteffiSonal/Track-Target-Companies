import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; 
import { DataService } from './data.service';
import {HttpClientModule} from '@angular/common/http';
import { TargetCompanyCreateComponent } from './target-company-create/target-company-create.component';
import { TargetCompaniesListComponent } from './target-companies-list/target-companies-list.component';
import { TargetCompanyViewComponent } from './target-company-view/target-company-view.component';
import { TargetCompanyEditComponent } from './target-company-edit/target-company-edit.component'


@NgModule({
  declarations: [
    AppComponent,
    TargetCompanyCreateComponent,
    TargetCompaniesListComponent,
    TargetCompanyViewComponent,
    TargetCompanyEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

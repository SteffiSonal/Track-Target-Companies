import { Component, OnInit } from '@angular/core';
import { TargetCompanyService } from '../target-company.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-target-companies-list',
  templateUrl: './target-companies-list.component.html',
  styleUrls: ['./target-companies-list.component.css']
})
export class TargetCompaniesListComponent implements OnInit {

  targetCompanies: any[] = [];
  targetCompanyName: string;
  targetCompanyRemarks: string;
  constructor(private router: Router,private targetCompanyService: TargetCompanyService) { }

  ngOnInit() {    
    //Fetch Existing Target Companies to Load in List View
    this.targetCompanyService.getTargetCompanies().subscribe((data : any[])=>{
        this.targetCompanies = data;
    });
  }

  //To Delete any existing Company entry
  public deleteTargetCompany(companyId){
      if(confirm("Are you sure to delete the company - "+companyId)){
      this.targetCompanyService.deleteTargetCompany(companyId).subscribe((data : any)=>{
        this.targetCompanyService.getTargetCompanies().subscribe((data : any[])=>{
          this.targetCompanies = data;
      });
    });
    }
  }

  //Edit existing company
  public updateCompany(companyId){
    this.router.navigateByUrl("/EditTargetCompany/"+companyId);
  }
  
  //View Company details in separate page. Comments will be seen.
  public viewTargetCompany(companyId){
    this.router.navigateByUrl("/ViewTargetCompany/"+companyId);
  }

  //Redirect to Create New Company Page.
  public createTargetCompany(){
    this.router.navigateByUrl("/CreateTargetCompany");
  }
  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TargetCompanyService } from '../target-company.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-target-company-edit',
  templateUrl: './target-company-edit.component.html',
  styleUrls: ['./target-company-edit.component.css']
})
export class TargetCompanyEditComponent implements OnInit {
  companyId : number;
  company:any;

  constructor(private router: Router,private route: ActivatedRoute, private targetCompanyService: TargetCompanyService) { 
    
    //Read Company ID from URL - Query String
    this.route.queryParams.subscribe(params => {
      this.route.params.subscribe( params => this.companyId = params["id"]);
     
      //Get Company details to Pre-Populate for edit
      this.targetCompanyService.getTargetCompany(this.companyId).subscribe((data : any)=>{
          this.company = data;
      });

  });
  }

  ngOnInit() {
  }

  //Save Company after edit
  SaveCompany () {
    this.targetCompanyService.updateTargetCompany(this.company).subscribe((data : any)=>{
      this.router.navigateByUrl('/');
    });
  }

  //Back to List view
  GoToList()
  {
    this.router.navigateByUrl("/");
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TargetCompanyService } from '../target-company.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-target-company-view',
  templateUrl: './target-company-view.component.html',
  styleUrls: ['./target-company-view.component.css']
})
export class TargetCompanyViewComponent implements OnInit {
  campanyId : number;
  company:any;

  constructor(private router: Router,private route: ActivatedRoute, private targetCompanyService: TargetCompanyService) { 
    //Ready ID from QueryString
    this.route.queryParams.subscribe(params => {
      this.route.params.subscribe( params => this.campanyId = params["id"]);
     
      //Get Company details to load in View
      this.targetCompanyService.getTargetCompany(this.campanyId).subscribe((data : any)=>{
          this.company = data;
      });

  });
  }

  ngOnInit() {
  }

  //Go back to List View
  GoToList()
  {
    this.router.navigateByUrl("/");
  }

}

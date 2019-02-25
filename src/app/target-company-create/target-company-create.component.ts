import { Component, OnInit } from '@angular/core';
import { TargetCompanyService } from '../target-company.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-target-company-create',
  templateUrl: './target-company-create.component.html',
  styleUrls: ['./target-company-create.component.css']
})
export class TargetCompanyCreateComponent implements OnInit {
  nameValidation = false;
  maxId: number;
  //Company Model
  newTargetCampany = { id: 0,  name: "", anualTurnOver: "", keyContacts: "",
                        mailId: "", status:"", financialPerformance:"",
                        remarks: ""};
  constructor(private router: Router, private targetCompanyService: TargetCompanyService) { 
  }

  ngOnInit() {
  }

  //To Save new company entry
  SaveNewCompany () {

    //To validate Name
    if(this.newTargetCampany.name == "")
    {
      this.nameValidation = true;
      return false;
    }
    else
    {
      this.nameValidation = false; 
    }

    //Fetch companies list and find Max Id.
    this.targetCompanyService.getTargetCompanies().subscribe((data : any[])=>{
      this.maxId = data.reduce((prev, current) => (prev.y > current.y) ? prev.id : current.id)
    });
    this.newTargetCampany.id = this.maxId+1;

    //Create Company entry in DB
    this.targetCompanyService.createTargetCompany(this.newTargetCampany).subscribe((data : any)=>{
      this.router.navigateByUrl('/');
    });
    
  }

  GoToList(){
    this.router.navigateByUrl('/');
  }
}

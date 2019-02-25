import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TargetCompanyService {

  SERVER_URL: string = "http://localhost:4200/api/";
  constructor(private httpClient: HttpClient) { }

  //Return All existing Companies
  public getTargetCompanies(){ 
       return this.httpClient.get(this.SERVER_URL + 'targetCompanies');
  }

  //Returns Single Company by ID
  public getTargetCompany(companyId){
       return this.httpClient.get(this.SERVER_URL + 'targetCompanies/'+companyId); 
  }

  //Save New Company to In-Memory
  public createTargetCompany(company: any){
      return this.httpClient.post(this.SERVER_URL + 'targetCompanies', company);
  }

  //Delete Company from In-Memory by Id
  public deleteTargetCompany(companyId){
      return this.httpClient.delete(this.SERVER_URL + 'targetCompanies/'+companyId);
  }

  //Update edited details of Existing Company
  public updateTargetCompany(company: any){
      return this.httpClient.put(this.SERVER_URL + 'targetCompanies', company);
  }
  
}

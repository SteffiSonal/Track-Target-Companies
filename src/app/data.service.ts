import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
//In Memory WebApi Backend to Mock Data
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

    let  targetCompanies =  [
     {  id:  1,  name:  'Test Company 1', anualTurnOver: '10M USD', keyContacts: 'Key Contact 1', mailId: 'TestCompany1@mail.com', status:'Researching', financialPerformance:'Poor', remarks: 'This company is running in loss at this moment. Doing research on other factors.' },
     {  id:  2,  name:  'Test Company 2', anualTurnOver: '5M USD', keyContacts: 'Key Contact 2', mailId: 'TestCompany2@mail.com', status:'Approved', financialPerformance:'Excellent', remarks: 'This company is running in good profits at this moment.' },
     {  id:  3,  name:  'Test Company 3', anualTurnOver: '200K USD', keyContacts: 'Key Contact 3', mailId: 'TestCompany3@mail.com', status:'Pending', financialPerformance:'Good', remarks: 'Yet to get CEO approval for this acquisition.' },
     {  id:  4,  name:  'Test Company 4', anualTurnOver: '25M USD', keyContacts: 'Key Contact 4', mailId: 'TestCompany4@mail.com', status:'Declined', financialPerformance:'Good', remarks: 'Financially high budget required to acquire this company. So declining.' },
    ];
 
    return {targetCompanies};
 
   }

}

import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';
import { ValidateAdmin } from '../services/validateCredentials.service';

@Component({
  moduleId:module.id,
  selector: 'dashboard',
  templateUrl: `dashboard.component.html`,
  styleUrls:['../stylesheets/dashboard.css'],
  providers:[ValidateAdmin]
})
export class DashboardComponent  {
  sponsors:any;
  number:number;
  total:number;
  i:any;
  temp:any;
  credentials:any;
  constructor(public ValidateAdmin : ValidateAdmin){
    this.sponsors=JSON.parse(sessionStorage.getItem("Sponsors"));
    this.number=this.sponsors.registeredUsers.length;
    this.total=this.number*60000;
    for(this.i=0;this.i<this.sponsors.registeredUsers.length;this.i++){
      this.temp=new Date(this.sponsors.registeredUsers[this.i].registrationDate);
      this.sponsors.registeredUsers[this.i].registrationDate=this.temp.getMonth() + 1 + '/' + this.temp.getDate() + '/' +  this.temp.getFullYear();
    }
    //console.log(this.sponsors.registeredUsers);
  }
  refresh(){
    this.credentials= JSON.parse(sessionStorage.getItem("Credentials"));
    this.ValidateAdmin.validateAdmin(this.credentials).subscribe(returned=>{
      sessionStorage.setItem('Sponsors',JSON.stringify(returned));
      this.sponsors=JSON.parse(sessionStorage.getItem("Sponsors"));
      this.number=this.sponsors.registeredUsers.length;
      this.total=this.number*60000;
      for(this.i=0;this.i<this.sponsors.registeredUsers.length;this.i++){
        this.temp=new Date(this.sponsors.registeredUsers[this.i].registrationDate);
        this.sponsors.registeredUsers[this.i].registrationDate=this.temp.getMonth() + 1 + '/' + this.temp.getDate() + '/' +  this.temp.getFullYear();
      }
    });

  }
}

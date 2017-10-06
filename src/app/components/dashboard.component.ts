import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  moduleId:module.id,
  selector: 'dashboard',
  templateUrl: `dashboard.component.html`,
  styleUrls:['../stylesheets/dashboard.css']
})
export class DashboardComponent  {
  sponsors:any;
  number:number;
  total:number;
  i:any;
  temp:any;
  constructor(){
    this.sponsors=JSON.parse(sessionStorage.getItem("Sponsors"));
    this.number=this.sponsors.registeredUsers.length;
    this.total=this.number*60000;
    for(this.i=0;this.i<this.sponsors.registeredUsers.length;this.i++){
      this.temp=new Date(this.sponsors.registeredUsers[this.i].registrationDate);
      this.sponsors.registeredUsers[this.i].registrationDate=this.temp.getMonth() + 1 + '/' + this.temp.getDate() + '/' +  this.temp.getFullYear();
    }
    console.log(this.sponsors.registeredUsers);
  }
  refresh(){

  }
}

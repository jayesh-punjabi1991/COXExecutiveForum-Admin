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
  constructor(){
    this.sponsors=JSON.parse(sessionStorage.getItem("Sponsors"));
    this.number=this.sponsors.registeredUsers.length;
    this.total=this.number*60000;
  }
}

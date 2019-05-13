import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  userList : any =[];
  constructor(
  	private dataService: DataService
  ) {
    this.getCustomerResults();
  }

  getCustomerResults() {
    this.dataService.getUserList().subscribe(
      data => {        
        this.userList = data;
      }, err => {
        console.log('Error' + err);
      }, () => {
        console.log('Request Completed!');
      }
    );
  }

  ngOnInit() {

  }
}

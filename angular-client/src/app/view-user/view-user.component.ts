import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userId: number;
  userDetails : any;
  constructor(
    private dataService: DataService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.params.subscribe(params => {
      this.userId = params['id'];
    })
    this.getUserDetails();
  }

  getUserDetails() {
    this.dataService.getUserDetails(this.userId).subscribe(
      data => {        
        this.userDetails = data;
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

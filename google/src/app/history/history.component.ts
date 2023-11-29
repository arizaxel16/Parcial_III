import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  users: any[] | undefined; // Array to hold the fetched users

  constructor(
    public globalService: GlobalService,
    private router: Router, 
  ){}

  ngOnInit() {
    // Fetch users from the JSON file using the GlobalService
    this.globalService.getData().subscribe((data) => {
      this.users = data;
    });
  }

  onClick(){
    this.globalService.clearData();
    this.router.navigate(['/']);
  }
}
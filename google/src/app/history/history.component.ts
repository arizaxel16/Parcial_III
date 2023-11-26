import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  constructor(
    public globalService: GlobalService,
    private router: Router, 
    ){}

  onClick(){
    this.globalService.clearData();
    this.router.navigate(['/']);
  }
}
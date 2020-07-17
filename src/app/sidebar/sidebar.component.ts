import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  
  constructor(public dataservice: DataService) { }

  ngOnInit(): void {}
  sidebarOpen: boolean = this.dataservice.getSidebarOpen();
}
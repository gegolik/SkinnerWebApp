import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent implements OnInit {
  constructor(public dataservice: DataService) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.dataservice.setSidebarOpen(!this.dataservice.getSidebarOpen())
    console.log(this.dataservice.getSidebarOpen());

}

}
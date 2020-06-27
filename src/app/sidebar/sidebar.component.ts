import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  navbarOpen = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    console.log(this.navbarOpen)
    this.navbarOpen = !this.navbarOpen;
  }

}

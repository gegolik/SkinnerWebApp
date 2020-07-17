import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sharedSidebarOpen: boolean = true;

  constructor() { }

  public getSidebarOpen() {
    return this.sharedSidebarOpen;
  }

  public setSidebarOpen(value: boolean){
    this.sharedSidebarOpen = value;

  }


}


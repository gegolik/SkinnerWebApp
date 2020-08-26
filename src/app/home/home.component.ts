import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../services/appservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Demo';
  greeting:any;
  constructor(private app: AppserviceService, private http: HttpClient) {
    http.get('http://localhost:8080/login').subscribe(data => this.greeting = data);
   }
   authenticated() { return this.app.authenticated; }

  ngOnInit(): void {
  }

}

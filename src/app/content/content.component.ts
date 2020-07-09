import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getData().subscribe(response => {
      console.log(response)
    });
  }

}

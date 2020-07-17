import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  respuesta: any = this.userService.getRespuesta();

  constructor(public userService: UserService) { }

  ngOnInit(): void {


    



  }

}

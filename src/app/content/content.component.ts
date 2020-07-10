import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { catchError } from 'rxjs/operators'; // Para el manejo de errores


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  respuesta: any = this.userService.getRespuesta();

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    /*
    this.userService.getData().subscribe(response => {

      this.respuesta = response;
      console.log(this.respuesta);

    }); */




  }

}

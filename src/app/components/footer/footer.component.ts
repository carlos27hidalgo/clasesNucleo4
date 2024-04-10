import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  nombre= 'Juan Jose Diaz'

  creador={
    nombre: 'Juan',
    apellido: 'Paz',
    edad: 23,
    lenguajes: ['python', 'c++', 'javascript']
  }

}

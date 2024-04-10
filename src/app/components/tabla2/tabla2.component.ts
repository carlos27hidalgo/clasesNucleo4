import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla2',
  templateUrl: './tabla2.component.html',
  styleUrls: ['./tabla2.component.css']
})
export class Tabla2Component {
  proyectos=[
    {
      id:1, nombre:"proyecto aplicacion web1", 
      url:"https://github.com/proyecto1"
    }, 
    {
      id:2, nombre:"proyecto aplicacion movil", 
      url:"https://github.com/proyecto2"
    }, 
    {
      id:3, nombre:"proyecto aplicacion spring", 
      url:"https://github.com/proyecto3"
    },
    {
      id:4, nombre:"proyecto aplicacion base de datos", 
      url:"https://github.com/proyecto4"
    },
    {
      id:5, nombre:"proyecto aplicacion BDD", 
      url:"https://github.com/proyecto5"
    },
    {
      id:6, nombre:"proyecto aplicacion React native", 
      url:"https://github.com/proyecto6"
    }
  ]
}

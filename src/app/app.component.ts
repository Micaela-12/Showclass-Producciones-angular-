import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnos = [
    {
      nombre: 'Pedro',
      apellido: 'Garcia'
    }, {
      nombre: 'Clara',
      apellido: 'Fernandez'
    }, {
      nombre: 'Agustin',
      apellido: 'Roberto'
    }, {
      nombre: 'Malena',
      apellido: 'Lesiuk'
    }
  ];
  
  alumno = "Mariano Fernandez";
  contenido1: string = "Curso de Programacion de Angular";
  contenido2: string = "Curso de programacion JavaScript";
}

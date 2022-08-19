import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, filter, forkJoin, map, Observable, of, scan, Subscription } from 'rxjs';
import { RxjsService } from './services/rxjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  profesores: any= [];

  alumnos: any = [
    { id: 1, nombre: 'Bruno', curso: 'Angular' },
    { id: 2, nombre: 'Micaela', curso: 'JavaScript' },
    { id: 3, nombre: 'Belen', curso: 'Angular' },
    { id: 4, nombre: 'Mariano', curso: 'css' },
    { id: 5, nombre: 'Ezequiel', curso: 'Angular' }

  ];
  

  constructor(
    private rxjsService: RxjsService
  ) {
 /*   this.rxjsService.obtenerPromiseProfesores().then((profesores) => {
      console.log('desde el promise profesores:', profesores);
      this.profesores = profesores;
    }).catch((error) => {
      console.log(error);
    }); */
    this.rxjsService.obtenerObservableProfesores().subscribe((profesores) => {
      console.log('desde observable de profesores', profesores);
      this.profesores = profesores;
    })
}
agregarNuevoProfesor() {
  let profesor = {
  id: 1,
    nombre: 'Marketing',
    cumision: '322044'
  }
  this.rxjsService.agregarNuevoProfesor(profesor);
  }

  ngOnInit(): void {
    this.rxjsService.obtenerObservableAlumno().pipe(
      map((alumnos: any[]) => alumnos.filter((alumno) => alumno.curso === 'Angular'))
    ).subscribe((alumnos) => {
      console.log('subcribe alumnos', alumnos);
    });
    const fork = forkJoin({
      sourceOne: of('Bienvenido/a'),
      sourceTwo: of('Showclass').pipe(delay(6000))
    }).subscribe((datos) => {
      console.log(datos)
    });
  }
} 





import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Curso } from 'src/app/shared/interfaces/curso';

const LISTA_CURSOS: Curso[] = [
  { comision: 112, nombre: 'Angular', profesor: 'Lucas Agra'},
  { comision: 314, nombre: 'JavaScript', profesor: 'Martina Fernandez'},
  { comision: 180, nombre: 'React', profesor: 'Sol Gonzalez'},
  { comision: 458, nombre: 'Desarollo web', profesor: ' Rosa Roberto'},
  { comision: 154, nombre: 'SQL', profesor: 'Josefina aznic'},
]

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursosSubject: Subject<any> = new Subject()

  constructor(
  ) {
    this.obtenerAlumnos().then((res) => {
      this.cursosSubject.next(res)
    })
  }

  obtenerAlumnos() {
    console.log('obteniendo alumnos');
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (LISTA_CURSOS.length > 0) {
          resolve(LISTA_CURSOS)
        }
        reject(
          {
            id: 400,
            message: 'No se han encontrado alumnos'
          }
        )
      }, 2000)
    })
  }

  obtenerObservableAlumnos() {
    return this.cursosSubject.asObservable()
  }

}

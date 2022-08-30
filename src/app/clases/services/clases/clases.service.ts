import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Clase } from 'src/app/shared/interfaces/clase';

const LISTA_CLASES: Clase[] = [
  { id: 1, nombre: 'desarrollo', curso: 'Angular'},
  { id: 2, nombre: 'header', curso: 'ReactJS'},
  { id: 3, nombre: 'Funciones', curso: 'JS'},
  { id: 4, nombre: 'Servicios', curso: 'Angular'},
  { id: 5, nombre: 'tablas', curso: 'JS'},
  { id: 6, nombre: 'Formularios', curso: 'Angular'},
  { id: 7, nombre: 'Typescript', curso: 'Angular'},
  { id: 8, nombre: 'actualizacion', curso: 'Vue'},
  { id: 9, nombre: 'forms', curso: 'ReactJS'},
]

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  clasesSubject: Subject<any> = new Subject()

  constructor(
  ) {
    this.obtenerClases().then((res) => {
      this.clasesSubject.next(res)
    })
  }

  obtenerClases() {   
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (LISTA_CLASES.length > 0) {
          resolve(LISTA_CLASES)
        }
        reject(
          {
            id: 400,
            message: 'No se han encontrado clases'
          }
        )
      }, 2000)
    })
  }

  obtenerObservableClases() {
    return this.clasesSubject.asObservable()
  }

}
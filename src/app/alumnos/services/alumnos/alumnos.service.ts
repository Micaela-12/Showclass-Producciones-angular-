import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alumno } from 'src/app/shared/interfaces/alumno';

const LISTA_ALUMNOS: Alumno[] = [
  { id: 1, nombre: 'Clara', apellido: 'Roberto', email: 'clara@email.com', telefono: 123456789, dni: 20860655, pais: 'AR', activo: true },
  { id: 2, nombre: 'Mariano', apellido: 'Lesiuk', email: 'micdms@email.com', telefono: 1122334455, dni: 34065191, pais: 'AR', activo: false },
  { id: 3, nombre: 'Martin', apellido: 'Amador', email: 'xmjvkbh@email.com', telefono: 3344556677, dni: 87441870, pais: 'CO', activo: true },
  { id: 4, nombre: 'Matias', apellido: 'Gollo', email: 'sigfrido@email.com', telefono: 9876543213, dni: 82472366, pais: 'AR', activo: true },
  { id: 5, nombre: 'Malena', apellido: 'Fernandez', email: 'male@email.com', telefono: 1234567899, dni: 75810926, pais: 'UR', activo: true },
  { id: 6, nombre: 'Marcos', apellido: 'Romero', email: 'haroldo@email.com', telefono: 5491428132549, dni: 22983104, pais: 'AR', activo: true },
  { id: 7, nombre: 'Blanca', apellido: 'Cruz', email: 'blanca@email.com', telefono: 5710984430382, dni: 85902663, pais: 'CO', activo: false },
  { id: 8, nombre: 'Sofia', apellido: 'Delia', email: 'sofi@email.com', telefono: 5650388923792, dni: 80062954, pais: 'CL', activo: true },
  { id: 9, nombre: 'Graciela', apellido: 'Rizonelli', email: 'gra@email.com', telefono: 5491877131249, dni: 87124785, pais: 'AR', activo: true },
  { id: 10, nombre: 'Milagros', apellido: 'Gros', email: 'milio@email.com', telefono: 5692457848113, dni: 57294097, pais: 'CL', activo: true }
]

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnoSubject: Subject<any> = new Subject()

  constructor(
  ) {
    this.obtenerAlumnos().then((res) => {
      this.alumnoSubject.next(res)
    })
  }

  obtenerAlumnos() {    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (LISTA_ALUMNOS.length > 0) {
          resolve(LISTA_ALUMNOS)
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
    return this.alumnoSubject.asObservable()
  }

}

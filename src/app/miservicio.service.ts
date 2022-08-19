import { Injectable } from '@angular/core';
export interface curso {
  nombre: string,
  Activos: boolean

}

export interface profesores {
  id: number,
  nombre: string,
  apellido: string,
  curso: curso[]
}
@Injectable({
  providedIn: 'root'
})
export class MiservicioService {

  profesores: Profesor[] = [
    {
      id:1,
      nombre: 'Mariano',
      apellido: 'Fernandez',
      cursos: [
        {
          nombre: 'js', activos: true
        },
        {
          nombre: 'web', activos: false
        }
      ]
    },
    {
      id:2,
      nombre: 'juan',
      apellido: 'Perez',
      cursos: [
        {
          nombre: 'js', activos: true
        },
        {
          nombre: 'web', activos: false
        }
      ]
    }
  ]
  constructor() { }



  getProfesores (id?: number) {
    if (id != null) {
     const response = this.profesores.find(Profesor => (Profesor.id ==id ) )
    return response 
    }
    return this.profesores
    }

    }


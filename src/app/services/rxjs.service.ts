import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {  from, Observable, of, Subject } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})

export class RxjsService {
  profesores: any[] = [
   { id: 1, nombre: 'Luz', curso: 'Angular' },
   { id: 2, nombre: 'Juan', curso: 'Reac' },
    { id: 3, nombre: 'Macarena', curso: 'Angular' }
  ];
  profesoresObservable: Observable<any>;

  alumnos: any = [
    {id: 1, nombre: 'Bruno', curso:'Angular'},
    {id: 2, nombre: 'Micaela', curso:'JavaScript'},
    {id: 3, nombre: 'Belen', curso:'Angular'},
    {id: 4, nombre: 'Mariano', curso:'css'},
    {id: 5, nombre: 'Ezequiel', curso:'Angular'}
    
      ];
 
  constructor() { 
    
    this.profesoresObservable = new Observable<any>((suscriptor) => {
      suscriptor.next(this.profesores);
      
      setTimeout(() => {
      this.profesores.push({ id: 4, nombre: "Marcos", curso: "Desarrollo web" })
    suscriptor.next(this.profesores);
      }, 4000)
    });
  }

  obtenerPromiseProfesores() {
    return new Promise((resolve, rejetc) => {
      if (this.profesores.length > 0) {
        resolve(this.profesores);
      } else {
        rejetc({
          codigo: 0,
          mensaje: 'No hay profesor'
        });
      }
    });
  }
  obtenerObservableProfesores() {
   return this.profesoresObservable
  }


agregarNuevoProfesor(profesor: any) {
    this.profesores.push(profesor);
    console.log(this.profesores);
    
    
   } 
   obtenerObservableAlumno(){
    return of(this.alumnos)
   }
  } 
  
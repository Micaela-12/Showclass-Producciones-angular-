import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shows = [
    {
      nombre: 'ShowMixer',
      duracion: '40 minutos'
    }, {
      nombre: 'Batucada',
      duracion: '40 minutos'
    }, {
      nombre: 'Robot de led',
      duracion: '40 minutos'
    }, {
      nombre: 'Red carpert',
      duracion: '40 minutos'
    }
  ];
  
  show = "robot led";
  contenido1: string = "Show Mixer, el show mas completo del mercado: bailarines + robot de led + bailarines de comparsa";
  contenido2: string = "Red carpet, el show para recibir a tus invitados de manera elegante y original: dos oscar gigantes + dos reporteros + dos fanaticos + alfombra roja";
}

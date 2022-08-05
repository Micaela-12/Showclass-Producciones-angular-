import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  formularioContacto!: FormGroup;

  constructor (
    private fb: FormBuilder
  ) {

    this.formularioContacto = fb.group({
      nombre: new FormControl ('', [Validators.required]),
      email: new FormControl ('', [Validators.required, Validators.email]),
      Show: new FormControl ('', [Validators.required])
    });
  }
   
enviarContacto(){
  console.log(this.formularioContacto);
  
}
ngOnInit(): void {
}
}


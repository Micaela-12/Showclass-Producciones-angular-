import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { alumno } from '../tabla/tabla.component';

@Component({
  selector: 'app-editar-dialog',
  templateUrl: './editar-dialog.component.html',
  styleUrls: ['./editar-dialog.component.css']
})
export class EditarDialogComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: alumno
  ) {
    this.formulario = fb.group({
      nombre: new FormControl(data.nombre),
      comision: new FormControl(data.curso),
      profesor: new FormControl(data.profesor),
      numeroEstudiantes: new FormControl(data.edad),
      matriculaAbierta: new FormControl(data.activo)
    })
  }

  ngOnInit(){
  }

  actualizar(){
    this.dialogRef.close(this.formulario.value);
  }

  cerrar(){
    this.dialogRef.close();
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';

export interface alumno { 
  nombre: string;
  curso: string;
  profesor: string;
  edad: number;
  activo: boolean;
}

const ELEMENT_DATA: alumno[] = [
  {nombre: 'Maria Clara', curso: '32310', profesor: 'Maria Gabriela', edad: 45, activo: true},
  {nombre: 'Mariano Fernandez', curso: '33320', profesor: 'Marcelo', edad: 34, activo: true},
  {nombre: 'Cintia Lesiuk', curso: '35310', profesor: 'Graciela', edad: 27, activo: false},
  {nombre: 'Agustin Roberto', curso: '31310', profesor: 'Milagros', edad: 22, activo: true},
  {nombre: 'Martin Fernandez', curso: '38310', profesor: 'Martina', edad: 30, activo: false},
  {nombre: 'Marcos Antonio', curso: '31310', profesor: 'Morena', edad: 24, activo: true},
  {nombre: 'Blanca Gonzales', curso: '32380', profesor: 'Cristian', edad: 33, activo: true}
]

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  columnas: string[] = ['nombre', 'comision', 'profesor', 'numeroEstudiantes', 'matriculaAbierta', 'acciones'];
  dataSource: MatTableDataSource<alumno> = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable) tabla!: MatTable<alumno>;
  
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  eliminar(elemento: alumno){
    this.dataSource.data = this.dataSource.data.filter((curso: alumno) => curso.curso != elemento.curso);
  }

  editar(elemento: alumno){
    const dialogRef = this.dialog.open(EditarDialogComponent, {
      width: '350px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if(resultado){
        const item = this.dataSource.data.find(curso => curso.curso === resultado.comision);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();
      }
    })
  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }
}

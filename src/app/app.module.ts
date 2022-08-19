import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StudentsComponent } from './components/students/students.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaComponent } from './components/tabla/tabla.component';
import { AppMaterialModule } from './app.material.module';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentsComponent,
    FormularioReactivoComponent,
    TablaComponent,
    EditarDialogComponent,
  ],
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

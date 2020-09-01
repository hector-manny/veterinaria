import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-agregarclientes',
  templateUrl: './agregarclientes.component.html',
  styleUrls: ['./agregarclientes.component.css']
})
export class AgregarclientesComponent implements OnInit {
  registro = [];
  cliente: any;
  nombre: string;
  Dui: number;
  mascota: string;
  tratamiento: string;
  medicamento: string;
  costo: number;
  contador: number;

  constructor() { }

  ngOnInit(): void {
    this.Dui = 0;
    this.nombre = '';
    this.mascota = '';
    this.tratamiento = '';
    this.medicamento = '';
    this.costo = 0;
    this.contador = 0;
  }
  ingresar() {
   this.cliente={ "nombre":this.nombre,"Dui":this.Dui,"mascota":this.mascota,"tratamiento":this.tratamiento,"medicamento":this.medicamento,"costo":this.costo};
   this.registro.push(this.cliente);
   this.contador++;
  }

}

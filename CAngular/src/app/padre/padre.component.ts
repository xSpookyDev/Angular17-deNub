import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{
  nombre?:string;
  fecha?: Date = new Date();
  dolar?: number= 961;
  pi?: number= Math.PI;
constructor (
  private _ServicioFamiliar: ServicioFamiliarService
){
  
  }

  

ngOnInit(): void {
    this._ServicioFamiliar.setHermanoGrande("Juan");
    this.nombre = this._ServicioFamiliar.getHermanoGrande();
    
}

saludar(){
  this._ServicioFamiliar.saludar(this._ServicioFamiliar.getHermanoPequeno())
}
preguntar(){
  console.log(this._ServicioFamiliar.preguntarPorHijo())
}





}
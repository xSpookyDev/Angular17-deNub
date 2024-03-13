import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit{
  nombre?: string;
  constructor (
    private _ServicioFamiliar: ServicioFamiliarService
  ){
    }
    _servicioFamiliar2 = inject(ServicioFamiliarService);
   
    ngOnInit(): void {
      this._ServicioFamiliar.setHermanopequeno("Pedro");
      this.nombre = this._ServicioFamiliar.getHermanoPequeno();
      
    }

    saludar(){
      this._ServicioFamiliar.saludar(this._ServicioFamiliar.getHermanoGrande())
    }
    preguntar(){
      console.log(this._ServicioFamiliar.preguntarPorHijo())
    }
    
}

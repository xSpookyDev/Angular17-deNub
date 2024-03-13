import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {
  
  hermanoGrande?:string;
  hermanoPequeno?:string;

  getHermanoGrande():string{
    return this.hermanoGrande || "";
  }
  setHermanoGrande(hermano:string){
    this.hermanoGrande = hermano;
  }

  getHermanoPequeno():string{
    return this.hermanoPequeno || "";
  }
  setHermanopequeno(hermano:string){
    this.hermanoPequeno = hermano;
  }

  saludar(hermano:string){
    console.log(`hola ${hermano}`);
  }


  preguntarPorHijo(){
    return 'Como esta tu hijo?';
  }
  constructor() {
   
   }
   
}


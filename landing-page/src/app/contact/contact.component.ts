import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators , FormGroup} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  formularioContacto: FormGroup;
tipoDni:string='';

  usuarioActivo:any={
    nombre: 'Pedro',
    apellido:'Perez',
    dni: '31231'
  }

  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      nombre:['', [Validators.required, Validators.minLength(3) ]],  
      apellido:['', [Validators.required, Validators.minLength(3)]],
     
      tipoDni: [''],
      email:['', [Validators.email, Validators.required]]
    })
  }

  ngOnInit(): void {
     //this.formularioContacto.get('apellido')?.setValidators([Validators.required, Validators.minLength(3)])
      this.formularioContacto.get('nombre')?.setValue('Juan')
      this.formularioContacto.get('nombre')?.disable()
     this.formularioContacto.get('tipoDni')?.valueChanges.subscribe
     
     (value=>{
      
      this.tipoDni=value
     })
     
     this.formularioContacto.valueChanges.subscribe(valor=> {
      console.log(valor)
     })
  }

  ngOnDestroy(): void {
    console.log("se destruye el componente")
    
  }

  hasErrors(controlName: string, errorType: string){
  return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }
 enviar(){
console.log(this.formularioContacto)
 }
}

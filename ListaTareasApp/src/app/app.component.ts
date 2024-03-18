import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{


listTareas:string []= [];
nuevaTarea: string = '';

private _tareasService =inject(TareasService)

ngOnInit(): void {
    this.listTareas = this._tareasService.getTareas();
}

agregarTarea(){
  this._tareasService.agregarTarea(this.nuevaTarea)
  this.nuevaTarea = '';
  this.listTareas = this._tareasService.getTareas();
}

eliminarTareas(index: number){
  this._tareasService.eliminarTareas(index);
  this.listTareas  = this._tareasService.getTareas();
}

}

import { Component, Input, ViewChild } from '@angular/core';
import { SesionComponent } from '../sesion/sesion.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SesionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  tiempoConexion: string = ''
  intervalo = 10
  @Input() usuario: string = ''
  @ViewChild('tiempoSesion') tiempoSesion!: SesionComponent;

  actualizar(segundos: number){
    this.tiempoConexion = 'Conectado: ' + segundos + 'segundos'
  }

  nuevoIntervalo(intervalo: number){
    console.log(intervalo)
    this.tiempoSesion.setIntervalo(intervalo)
  }
}

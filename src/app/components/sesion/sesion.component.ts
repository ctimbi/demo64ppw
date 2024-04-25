import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sesion',
  standalone: true,
  imports: [],
  templateUrl: './sesion.component.html',
  styleUrl: './sesion.component.scss'
})
export class SesionComponent {
  segundos: number = 0
  @Input() intervalo = 0
  @Output() tiempo = new EventEmitter<number>()

  ngOnInit(){
    console.log("inciando SesionComponent")
    this.tiempo.emit(this.segundos)
    setInterval(() => {
      this.segundos++
      console.log(this.segundos, this.intervalo)
      if (this.segundos % this.intervalo ==0)
        this.tiempo.emit(this.segundos)
    }, 1000);
  }

  reset(){
    this.segundos = 0
    this.tiempo.emit(this.segundos)
  }

  setIntervalo(intervalo: number){
    this.intervalo = intervalo
  }
}

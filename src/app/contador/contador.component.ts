import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit, OnDestroy {
  fechaFinal!: Date;
  dias!: number;
  horas!: number;
  minutos!: number;
  segundos!: number;
  flag: boolean = true;
  private intervalo: any;

  ngOnInit() {
    // Establece la fecha final (formato: 'año-mes-día horas:minutos:segundos')
    this.fechaFinal = new Date('2024-01-31T08:00:00');

    if (this.fechaFinal > new Date()) {
      this.calcularDiferencia();
      // Actualiza el contador cada segundo
      this.intervalo = setInterval(() => {
        this.calcularDiferencia();
      }, 1000);
      this.flag = true;
    } else {
      this.flag = false;
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

  calcularDiferencia() {
    const ahora = new Date();
    const diferencia = this.fechaFinal.getTime() - ahora.getTime();

    this.dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    this.horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    this.segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit,OnDestroy {
  fechaFinal!: moment.Moment;
  dias!: number;
  horas!: number;
  minutos!: number;
  segundos!: number;
  flag:boolean=true;
  private intervalo: any;
  

  ngOnInit() {
    
    this.fechaFinal = moment('2024-01-31T08:00:00');
    if(this.fechaFinal >moment() ){
      this.calcularDiferencia();
      // Actualiza el contador cada segundo
      this.intervalo = setInterval(() => {
      this.calcularDiferencia();
    }, 1000);
        this.flag=true;
    }else{
      this.flag=false;
    }
  
  }
    ngOnDestroy() {
      clearInterval(this.intervalo);
    }
  
    calcularDiferencia() {
      const ahora = moment();  
      const diferencia = moment.duration(this.fechaFinal.diff(ahora));
      this.dias = diferencia.days();
      this.horas = diferencia.hours();
      this.minutos = diferencia.minutes();
      this.segundos = diferencia.seconds();
    }
  }


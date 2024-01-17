import { Component } from '@angular/core';
import { Howl } from 'howler'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaulaExamen';
  private backgroundMusic = new Howl({
    src: ['assets/sonido/Guitarricadelafuente - El Conticinio (Audio).mp3'], // Ruta a tu archivo de audio
    loop: true, // Reproducción en bucle
  });

  ngOnInit() {
    this.backgroundMusic.play(); // Inicia la reproducción al inicializar el componente
  }
}

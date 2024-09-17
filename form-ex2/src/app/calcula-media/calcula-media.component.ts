  import { Component } from '@angular/core';

  @Component({
    selector: 'app-calcula-media',
    standalone: true,
    imports: [],
    templateUrl: './calcula-media.component.html',
    styleUrl: './calcula-media.component.css'
  })
  export class CalculaMediaComponent {
    ac1: number = 0;
    ac2: number = 0;
    ag: number = 0;
    af: number = 0;
    mediaFinal: number = 0;
    resultado: string | null = null;

    calcularMedia() {
      this.mediaFinal = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
      
      if (this.mediaFinal >= 5) {
        this.resultado = 'Aprovado';
      } else {
        this.resultado = 'Reprovado';
      }
    }
  }

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-obra',
  imports: [],
  templateUrl: './report-obra.html',
  styleUrl: './report-obra.css',
})
export class ReportObra {
  public router = inject(Router);

  // Um método para formatar o número
  formatarParaReal(valor: number): string {
    return valor.toLocaleString('pt-BR');
  }

  // ITENS OBRA
  public valorEletricaIluminacao: number = 12000; //****ajustar dinamicamente */
  public valorGesso: number = 5000; //****ajustar dinamicamente */
  public valorPiso: number = 6000; //****ajustar dinamicamente */
  public valorPintura: number = 2000; //****ajustar dinamicamente */
  public valorMarcenaria: number = 90000; //****ajustar dinamicamente */
  public valorVidros: number = 4000; //****ajustar dinamicamente */
  public valorPedreiro: number = 10000; //****ajustar dinamicamente */

  // VALOR FINAL
  public valorFinal: number =
    this.valorEletricaIluminacao +
    this.valorGesso +
    this.valorPiso +
    this.valorPintura +
    this.valorMarcenaria +
    this.valorVidros +
    this.valorPedreiro;

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}

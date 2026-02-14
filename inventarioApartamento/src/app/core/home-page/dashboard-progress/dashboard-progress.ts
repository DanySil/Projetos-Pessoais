import { Component } from '@angular/core';

//Imports gráfico
import {
  ChartData,
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
  Title,
  Colors,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(DoughnutController, ArcElement, Tooltip, Legend, ChartDataLabels);

@Component({
  selector: 'app-dashboard-progress',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './dashboard-progress.html',
  styleUrl: './dashboard-progress.css',
})
export class DashboardProgress {
  //Definindo tipo de gráfico
  public doughnutChartType: any = 'doughnut';

  //variaveis

  public naoComprados: number = 30; //****ajustar dinamicamente */
  public Comprados: number = 70; //****ajustar dinamicamente */

  public valorGasto: number = 45000; //****ajustar dinamicamente */
  public valorRestante: number = 18000; //**ajustar dinamicamente */

  //Dados do gráfico
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Comprados', 'Não Comprados'],
    datasets: [
      {
        data: [this.Comprados, this.naoComprados], //valores grafico
        backgroundColor: ['#10B981', '#E5E7EB'], //cor gráfico
        borderColor: 'transparent', //borda
        spacing: 2, //  dá uma separação sutil entre os arcos
      },
    ],
  };

  //Opções do gráfico
  public doughnutChartOptions: any = {
    responsive: true, //responsividade
    maintainAspectRatio: false, // (5) deixa você controlar pelo CSS (w/h)
    cutout: '82%', //espessura do gráfico
    rotation: -90, // começa do topo
    animation: { duration: 900 }, //animação do arco
    plugins: {
      legend: {
        display: false, //desativando legenda
      },
      datalabels: {
        display: false, //desativando datalabels
      },
      title: {
        display: false, //desativando titulo grafico
      },
    },
  };

  // Um método para formatar o número
  formatarParaReal(valor: number): string {
    return valor.toLocaleString('pt-BR');
  }
}

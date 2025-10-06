import { Component } from '@angular/core';

//Imports gráfico
import { ChartData, Chart, DoughnutController, ArcElement, Tooltip, Legend, plugins, Title, Colors } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(DoughnutController, ArcElement, Tooltip, Legend, ChartDataLabels);

@Component({
  selector: 'app-dashboard-progress',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './dashboard-progress.html',
  styleUrl: './dashboard-progress.css'
})
export class DashboardProgress {
  //Definindo tipo de gráfico
  public doughnutChartType: any = 'doughnut';

  //Dados do gráfico
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Comprados', 'Não Comprados'],
    datasets: [
      {
        data: [70, 30], //valor ******alterar para valor ser dinamico index 0 é maior, index 1 é menor
        backgroundColor: ['#363636', '#F29F0F'], //cor gráfico
        borderColor: 'transparent', //borda
        borderAlign: 'inner',
      }
    ]
  }

  //Opções do gráfico
  public doughnutChartOptions: any = {
    responsive: true, //responsividade
    cutout: '85%', //espessura do gráfico
    plugins: {
      legend: {
        display: false, //desativando legenda
      },
      datalabels: {
        display: false //desativando datalabels
      },
    title: {
      display: true,
      fontSize: 50,
      text: "Relatorio de Progresso Enxoval",
    }
    },
  }

  //variaveis
  public naoComprados: number = this.doughnutChartData.datasets[0].data[1]
  public Comprados: number = this.doughnutChartData.datasets[0].data[0]

  // Um método para formatar o número
  formatarParaReal(valor: number): string {
    return valor.toLocaleString('pt-BR');
  }

  public valorGasto: number = 45000; //****ajustar dinamicamente */
  public valorRestante: number = 18000; //**ajustar dinamicamente */
  public totalItens: number = 800; //**ajustar dinamicamente */

}

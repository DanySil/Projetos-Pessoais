import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


//Components
import { Header } from './header/header';
import { FooterMenu } from './footer-menu/footer-menu';
import { DashboardProgress } from './dashboard-progress/dashboard-progress';
import { ComodosList } from './comodos-list/comodos-list';
import { ReportObra } from './report-obra/report-obra';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, DashboardProgress, ComodosList, ReportObra, FooterMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

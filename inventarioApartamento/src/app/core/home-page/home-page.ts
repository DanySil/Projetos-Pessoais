import { Component } from '@angular/core';

//Componentes
import { Header } from "./header/header";
import { DashboardProgress } from "./dashboard-progress/dashboard-progress";
import { ComodosList } from "./comodos-list/comodos-list";
import { ReportObra } from "./report-obra/report-obra";
import { FooterMenu } from "../../shared/footer-menu/footer-menu";

@Component({
  selector: 'app-home-page',
  imports: [Header, DashboardProgress, ComodosList, ReportObra, FooterMenu],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class Home {

}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./core/home-page/header/header";
import { DashboardProgress } from "./core/home-page/dashboard-progress/dashboard-progress";
import { ComodosList } from "./core/home-page/comodos-list/comodos-list";
import { ReportObra } from "./core/home-page/report-obra/report-obra";
import { FooterMenu } from "./shared/footer-menu/footer-menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, DashboardProgress, ComodosList, ReportObra, FooterMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

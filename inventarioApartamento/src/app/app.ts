import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


//Components
import { Header } from './header/header';
import { FooterMenu } from './footer-menu/footer-menu';
import { DashboardProgress } from './dashboard-progress/dashboard-progress';
import { ComodosList } from './comodos-list/comodos-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, DashboardProgress, ComodosList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

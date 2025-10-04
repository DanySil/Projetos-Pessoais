import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FooterMenu } from './footer-menu/footer-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FooterMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

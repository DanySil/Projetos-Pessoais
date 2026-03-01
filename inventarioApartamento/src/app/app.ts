import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterMenu } from './shared/components/footer-menu/footer-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-menu',
  imports: [],
  templateUrl: './footer-menu.html',
  styleUrl: './footer-menu.css'
})
export class FooterMenu {

  public clickStart(): void {
    console.log("Cliquei no inicio");
  }

  public clickWork(): void {
    console.log("Cliquei no Diário de Obra");
  }

  public clickShopping(): void {
    console.log("Cliquei no Enxoval");
  }

  public clickPrice(): void {
    console.log("Cliquei no Comparativo de Preços");
  }
}

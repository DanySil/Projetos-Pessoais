import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-menu',
  imports: [],
  templateUrl: './footer-menu.html',
  styleUrl: './footer-menu.css'
})
export class FooterMenu {

  public clickStart(): void {
    console.log("Clicou no inicio");
  }

  public clickWork(): void {
    console.log("Clicou no Diário de Obra");
  }

  public clickShopping(): void {
    console.log("Clicou no Enxoval");
  }

  public clickPrice(): void {
    console.log("Clicou no Comparativo de Preços");
  }
}

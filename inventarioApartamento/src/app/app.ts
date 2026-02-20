import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./core/home-page/home-page";
import { ItemList } from "./core/item-list/item-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, ItemList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

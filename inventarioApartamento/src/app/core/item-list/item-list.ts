import { Component } from '@angular/core';

//Components
import { FooterMenu } from "../../shared/footer-menu/footer-menu";
import { Filter } from "./filter/filter";
import { RoomGuideComponent } from "./room-guide/room-guide";
import { ItensCards } from "./itens-cards/itens-cards";


@Component({
  selector: 'app-item-list',
  imports: [FooterMenu, RoomGuideComponent, ItensCards],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList {

}

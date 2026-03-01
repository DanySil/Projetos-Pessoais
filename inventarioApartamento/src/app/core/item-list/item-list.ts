import { Component } from '@angular/core';

//Components
import { Filter } from "./filter/filter";
import { RoomGuideComponent } from "./room-guide/room-guide";
import { RoomSelector } from './room-selector/room-selector';


@Component({
  selector: 'app-item-list',
  imports: [RoomGuideComponent, Filter, RoomSelector],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList {

}

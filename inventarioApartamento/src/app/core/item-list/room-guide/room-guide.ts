import { Component, OnInit } from '@angular/core'; //Chamando o OnInit

//Imports novos
import { ItemsDetails, Room } from './interfaces/room-guide.interface'; //Chamada interface back
import { RoomGuideService } from './services/room-guide'; //Chamando o service


@Component({
  selector: 'app-room-guide',
  imports: [],
  templateUrl: './room-guide.html',
  styleUrl: './room-guide.css'
})
export class RoomGuideComponent implements OnInit {

public itemsRoom: Room[] = [];
public itemData: ItemsDetails[] = [];

constructor(private roomGuide: RoomGuideService) {} //pq no contructor? pq se não a página vem primeiro que os dados?

ngOnInit(): void {
this.getDataRoomGuideService() //pq aqui?
}

private getDataRoomGuideService(): void {
this.roomGuide.getData().subscribe({ //O que é o subscribe? eu sei que ele recebe next que é sucesso e error que é erro
  next: (response: Room[]) => { //response estou dando qualquer nome ou é um nome exato??? o que estou fazendo aqui?
    this.itemsRoom = response //o que faço aqui?
    this.itemData = response[0]?.items ?? []; //char??
  },
  error: err => {
    console.log('err', err) //que erro vai dar aqui? isso tudo é um padrão de escrita?
  }
  }
)
}

  // Um método para formatar o número
  public formatarParaReal(valor: number): string {
    return valor.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
}

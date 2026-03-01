import { Component, OnInit } from '@angular/core'; //Chamando o OnInit

//Imports novos
import { IItemsDetails, IRoom } from './interfaces/room-guide.interface'; //Chamada interface back
import { RoomGuideService } from './services/room-guide'; //Chamando o service

//Components
import { FormAddItem } from '../form-add-item/form-add-item';

@Component({
  selector: 'app-room-guide',
  imports: [FormAddItem],
  templateUrl: './room-guide.html',
  styleUrl: './room-guide.css'
})
export class RoomGuideComponent implements OnInit {

public itemsRoom: IRoom[] = [];
public itemData: IItemsDetails[] = [];
public isAddItemModal: boolean = false;

constructor(private roomGuideService: RoomGuideService) {} //Precisamos chamar as ferramentas para funcionar antes de iniciar o component.

ngOnInit(): void {
this.getDataRoomGuideService() //Inicia o component
}

private getDataRoomGuideService(): void {
this.roomGuideService.getData().subscribe({ //Subscribe - Observa o Observable que foi chamado no service
  next: (response: IRoom[]) => { //response é um parametro (poderia ser qualquer nome), o Room[] é a tipagem que está recebendo o tipo do que vem do back
    this.itemsRoom = response //Atribuindo o valor dos dados que estão vindo para o back dentro da variavel que criei
    this.itemData = response[0]?.items ?? [];
  },
  error: err => {
    console.log('err', err)
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

public unitText(quantity: number): string {
   return quantity === 1 ? 'unidade' : 'unidades'

}

public openAddItemModal(): void {
  this.isAddItemModal = true;
}
public closeAddItemModal(): void {
  this.isAddItemModal = false;
}

}

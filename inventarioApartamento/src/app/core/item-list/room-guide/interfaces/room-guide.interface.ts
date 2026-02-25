export interface IRoom {
  id: number;
  name: string;
  items: IItemsDetails[]; //array []
}

export interface IItemsDetails {
  id: number;
  image: string;
  nameItem: string;
  price: number;
  purchased: string;
  priority: string;
  quantity: number;
  link: string;
}

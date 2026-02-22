export interface Room {
  id: number;
  name: string;
  items: ItemsDetails[]; //array []
}

export interface ItemsDetails {
  id: number;
  image: string;
  nameItem: string;
  price: number;
  purchased: string;
  priority: string;
  quantity: number;
  link: string;
}

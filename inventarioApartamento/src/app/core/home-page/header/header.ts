import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

public clickNotification(): void {
  console.log("Clicou na notificação");
}

public clickIcon(): void {
  console.log("Clicou no Avatar");
}
}

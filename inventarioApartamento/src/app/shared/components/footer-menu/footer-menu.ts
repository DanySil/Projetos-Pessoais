import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer-menu',
  imports: [],
  templateUrl: './footer-menu.html',
  styleUrl: './footer-menu.css'
})
export class FooterMenu {


private router = inject(Router);

public navigateTo(route: string): void {
 this.router.navigate([route])
}
}

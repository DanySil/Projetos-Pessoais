import { Routes } from '@angular/router';

//Rotas dos componentes
import { Home } from './core/home-page/home-page';
import { ItemList } from './core/item-list/item-list';
import { JournalPage } from './core/journal-page/journal-page';
import { ComparePage } from './core/compare-page/compare-page';
import { FooterMenu } from './shared/footer-menu/footer-menu';

export const routes: Routes = [
  {
    path: 'home-page',
    component: Home
  },
  {
    path: 'item-list',
    component: ItemList
  },
  {
    path: 'journal-page',
    component: JournalPage
  },
  {
    path: 'compare-page',
    component: ComparePage
  },
  {
    path: 'footer',
    component: FooterMenu
  }
];

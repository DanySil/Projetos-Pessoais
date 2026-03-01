import { Routes } from '@angular/router';
import { RoutesEnum } from './shared/enum/routes.enum';
import { ItemList } from './core/item-list/item-list';
import { Home } from './core/home-page/home-page';
import { ComparePage } from './core/compare-page/compare-page';
import { JournalPage } from './core/journal-page/journal-page';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: RoutesEnum.HOME_PAGE,
    component: Home,
  },
  {
    path: RoutesEnum.ITEM_LIST,
    component: ItemList,
  },
  {
    path: RoutesEnum.COMPARE_PAGE,
    component: ComparePage,
  },
  {
    path: RoutesEnum.JOURNAL_PAGE,
    component: JournalPage
  }
];

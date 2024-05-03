import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadShoppingList, removeShoppingListItem } from '../store/shopping-list.actions';
import { getShoppingList } from '../store/shopping-list.selectors';
import { IShoppingListItem } from '../store/shopping-list.state';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  constructor(private store: Store) { }

  ingredients$ = this.store.pipe(
    select(getShoppingList)
  )

  ngOnInit(): void {
    this.store.dispatch(loadShoppingList())
  }

  removeItem(item: IShoppingListItem) {
    this.store.dispatch(removeShoppingListItem({ item }))
  }
}

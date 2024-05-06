import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadShoppingList } from '../store/shopping-list.actions';
import { getShoppingList } from '../store/shopping-list.selectors';

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
}

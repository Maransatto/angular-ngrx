import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadShoppingList } from '../store/shopping-list.actions';
import { IShoppingListItem } from '../store/shopping-list.state';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  @Input() ingredients?: IShoppingListItem[];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadShoppingList())
  }
}

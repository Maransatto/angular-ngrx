import { Injectable } from "@angular/core";
import { of } from "rxjs";

Injectable()
export class ShoppingListService {
  ingredientsMock = [
        {
            id: 1,
            name: 'Milk',
            quantity: 1
        },
        {
            id: 2,
            name: 'Bread',
            quantity: 2
        },
        {
            id: 3,
            name: 'Coconut',
            quantity: 2
        },
    ];

  getIngredients() {
    return of(this.ingredientsMock);
  }
}
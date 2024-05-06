import { createAction, props } from "@ngrx/store";
import { IShoppingListCreateBase, IShoppingListItem } from "./shopping-list.state";

export const loadShoppingList = createAction(
    '[Shopping List] Load Shopping List'
);
export const loadShoppingListSuccess = createAction(
    '[Shopping List Effects] Load Shopping List Success',
    props<{ entities: IShoppingListItem[] }>()
);
export const loadShoppingListError = createAction(
    '[Shopping List Effects] Load Shopping List Error',
);

export const addShoppingListItem = createAction(
    '[Add Ingredient] Add Shopping List Item',
    props<{ item: IShoppingListCreateBase }>()
);

export const addShoppingListItemSuccess = createAction(
    '[Shopping List Effects] Add Shopping List Item Success',
    props<{ item: IShoppingListItem }>()
);

export const addShoppingListItemError = createAction(
    '[Shopping List Effects] Add Shopping List Item Error',
);
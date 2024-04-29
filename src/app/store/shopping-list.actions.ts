import { createAction, props } from "@ngrx/store";
import { IShoppingListItem } from "./shopping-list.state";

export const loadShoppingList = createAction(
    '[Shopping List] Load Shopping List'
);
export const loadShoppingListSuccess = createAction(
    '[Shopping List] Load Shopping List Success',
    props<{ entities: IShoppingListItem[] }>()
);
export const loadShoppingListError = createAction(
    '[Shopping List] Load Shopping List Error',
);
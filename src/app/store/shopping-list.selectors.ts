import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IShoppingListState } from "./shopping-list.state";

const getShoppingListState = createFeatureSelector<IShoppingListState>('shoppingList');

export const getShoppingList = createSelector(
    getShoppingListState,
    (state: IShoppingListState) => state.entities
);

export const getShoppingListIsLoading = createSelector(
    getShoppingListState,
    (state: IShoppingListState) => state.isLoading
);
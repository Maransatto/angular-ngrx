import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IShoppingListState } from "./shopping-list.state";

const getShoppingListState = createFeatureSelector<IShoppingListState>('shoppingList');

export const getShoppingList = createSelector(
    getShoppingListState,
    (state: IShoppingListState) => 
        [...state.entities].sort(
            (a, b) => a.name.localeCompare(b.name)
        )
);

export const getShoppingListIsLoading = createSelector(
    getShoppingListState,
    (state: IShoppingListState) => state.isLoading
);

export const getShoppingListIsSaving = createSelector(
    getShoppingListState,
    (state: IShoppingListState) => state.isSaving
);

export const getShoppingListIsDeleting = createSelector(
    getShoppingListState,
    (state: IShoppingListState) => state.isDeleting
);
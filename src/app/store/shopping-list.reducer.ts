import { createReducer, on } from "@ngrx/store";
import { loadShoppingList, loadShoppingListError, loadShoppingListSuccess } from "./shopping-list.actions";
import { IShoppingListState } from "./shopping-list.state";

export const initialState: IShoppingListState = {
    entities: [
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
    ],
    isLoading: false
};

export const shoppingListReducer = createReducer(
    initialState,
    on(loadShoppingList, (state) => ({
        ...state,
        isLoading: true
    })),
    on(loadShoppingListSuccess, (state, { entities }) => ({
        ...state,
        entities,
        isLoading: false
    })),
    on(loadShoppingListError, (state) => ({
        ...state,
        isLoading: false
    })),
)
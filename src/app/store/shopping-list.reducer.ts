import { createReducer, on } from "@ngrx/store";
import { addShoppingListItem, addShoppingListItemError, addShoppingListItemSuccess, loadShoppingList, loadShoppingListError, loadShoppingListSuccess, removeShoppingListItem, removeShoppingListItemError, removeShoppingListItemSuccess } from "./shopping-list.actions";
import { IShoppingListState } from "./shopping-list.state";

export const initialState: IShoppingListState = {
    entities: [],
    isLoading: false,
    isSaving: false,
    isDeleting: false
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
    on(addShoppingListItem, (state) => ({
        ...state,
        isSaving: true
    })),
    on(addShoppingListItemSuccess, (state, { item }) => ({
        ...state,
        entities: [...state.entities, item],
        isSaving: false
    })),
    on(addShoppingListItemError, (state) => ({
        ...state,
        isSaving: false
    })),
    on(removeShoppingListItem, (state, { item }) => ({
        ...state,
        entities: state.entities.filter(i => i.id !== item.id),
        isDeleting: true
    })),
    on(removeShoppingListItemSuccess, (state) => ({
        ...state,
        isDeleting: false
    })),
    on(removeShoppingListItemError, (state, { item }) => ({
        ...state,
        entities: [...state.entities, item],
        isDeleting: false
    }))
)
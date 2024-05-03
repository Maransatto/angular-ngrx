export interface IShoppingListCreateBase {
    name: string;
    quantity: number;
}

export interface IShoppingListItem extends IShoppingListCreateBase {
    id: number;
}

export interface IShoppingListState {
    entities: IShoppingListItem[];
    isLoading: boolean;
    isSaving: boolean;
    isDeleting: boolean;
}
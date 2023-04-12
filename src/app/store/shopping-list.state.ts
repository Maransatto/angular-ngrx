export interface IShoppingListItem {
    id: number;
    name: string;
    quantity: number;
}

export interface IShoppingListState {
    entities: IShoppingListItem[];
    isLoading: boolean;
}
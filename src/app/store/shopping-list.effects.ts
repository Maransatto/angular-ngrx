import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, delay, map, mergeMap, of, switchMap } from "rxjs";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { addShoppingListItem, addShoppingListItemError, addShoppingListItemSuccess, loadShoppingList, loadShoppingListError, loadShoppingListSuccess, removeShoppingListItem, removeShoppingListItemError, removeShoppingListItemSuccess } from "./shopping-list.actions";

export const loadShoppingListEffect = createEffect((
    actions$ = inject(Actions),
    service = inject(ShoppingListService)
) => actions$.pipe(
    ofType(loadShoppingList),
    switchMap(() =>
        service.getIngredients().pipe(
            map(entities => loadShoppingListSuccess({ entities })),
            catchError(() => of(loadShoppingListError()))
        )
    )
), { functional: true})

export const addShoppingListEffect = createEffect((
    actions$ = inject(Actions),
    service = inject(ShoppingListService)
) => actions$.pipe(
    ofType(addShoppingListItem),
    delay(2_000),
    mergeMap(({ item }) =>
        service.addIngredient(item).pipe(
            map(itemCreated => addShoppingListItemSuccess({ item: itemCreated })),
            catchError(() => of(addShoppingListItemError()))
        )
    )
), { functional: true})

export const removeShoppingListItemEffect = createEffect((
    actions$ = inject(Actions),
    service = inject(ShoppingListService)
) => actions$.pipe(
    ofType(removeShoppingListItem),
    delay(2_000),
    mergeMap(({ item }) =>
        service.removeIngredient(item).pipe(
            map(() => removeShoppingListItemSuccess()),
            catchError(() => of(removeShoppingListItemError({ item })))
        )
    )
), { functional: true})
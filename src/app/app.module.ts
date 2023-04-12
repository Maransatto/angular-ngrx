import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './store/shopping-list.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    AddIngredientComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      shoppingList: shoppingListReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './store/shopping-list.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import * as shoppingListEffects from './store/shopping-list.effects';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    AddIngredientComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      shoppingList: shoppingListReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([shoppingListEffects]),
    HttpClientModule
  ],
  providers: [ShoppingListService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    AddIngredientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

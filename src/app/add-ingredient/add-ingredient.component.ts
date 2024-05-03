import { Component } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addShoppingListItem } from '../store/shopping-list.actions';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss'],
})
export class AddIngredientComponent {

  constructor(private fb: UntypedFormBuilder, private store: Store) { }

  form: UntypedFormGroup = this.fb.group({
    name: ['', Validators.required],
    quantity: ['', Validators.required]
  })

  addIngredient() {
    if (this.form.valid) {
      this.store.dispatch(addShoppingListItem({item: this.form.value}));
      this.form.reset();
    }
  }
}

import { createAction, props } from '@ngrx/store';
import { Item } from '../models/item.model';

export const itemAdd = createAction('Item Add', props<{ item: Item }>());
export const itemRemove = createAction('Item Remove', props<{ id: number }>());

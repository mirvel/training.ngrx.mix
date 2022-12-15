import { createReducer, on } from '@ngrx/store';
import { itemAdd } from 'itemActions/item.actions';

const initialState = {};

export const itemReducer = createReducer(initialState, on(itemAdd,()=>));

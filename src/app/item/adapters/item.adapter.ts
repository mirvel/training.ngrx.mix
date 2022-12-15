import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Item } from "itemModels/item.model";

export const itemAdapter: EntityAdapter<Item> = createEntityAdapter<Item>();
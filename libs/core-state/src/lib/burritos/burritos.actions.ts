import { createAction, props } from "@ngrx/store";
import {  Burrito } from "@burritos/api-interfaces";

// Select Entity

export const selectBurrito = createAction(
    '[BURRITO] Select Burrito',
    props<{ burritoId: string }>()
);

// Load all Entities

export const loadBurritos = createAction(
    '[BURRITO] Load Burritos'
);

export const loadBurritosSuccess = createAction(
    '[BURRITO] Load Burritos Success',
    props<{ burritos: Burrito[]}>()
);

export const loadBurritosFailed = createAction(
    '[BURRITO] Load Burritos Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadBurrito = createAction(
    '[BURRITO] Load Burrito',
    props<{ burritoId: string}>()
);

export const loadBurritoSuccess = createAction(
    '[BURRITO] Load Burrito Success',
    props<{ burrito: Burrito}>()
);

export const loadBurritoFailed = createAction(
    '[BURRITO] Load Burrito Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createBurrito = createAction(
    '[BURRITO] Create Burrito',
    props<{ burrito: Burrito}>()
);

export const createBurritoSuccess = createAction(
    '[BURRITO] Create Burrito Success',
    props<{ burrito: Burrito}>()
);

export const createBurritoFailed = createAction(
    '[BURRITO] Create Burrito Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateBurrito = createAction(
    '[BURRITO] Update Burrito',
    props<{ burrito: Burrito}>()
);

export const updateBurritoSuccess = createAction(
    '[BURRITO] Update Burrito Success',
    props<{ burrito: Burrito}>()
);

export const updateBurritoFailed = createAction(
    '[BURRITO] Create Burrito Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteBurrito = createAction(
    '[BURRITO] Delete Burrito',
    props<{ burrito: Burrito}>()
);

export const deleteBurritoSuccess = createAction(
    '[BURRITO] Delete Burrito Success',
    props<{ burrito: Burrito}>()
);

export const deleteBurritoFailed = createAction(
    '[BURRITO] Create Burrito Failed',
    props<{ error: any}>()
);
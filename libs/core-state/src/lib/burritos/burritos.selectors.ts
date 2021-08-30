import { emptyBurrito } from "@burritos/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { burritoAdapter, BurritoState, BURRITO_FEATURE_KEY } from "./burritos.reducer";

export const getBurritoState = createFeatureSelector<BurritoState>(BURRITO_FEATURE_KEY);

const { selectAll, selectEntities } = burritoAdapter.getSelectors();

export const getBurritosLoaded = createSelector(
    getBurritoState,
    (state: BurritoState) => state.loaded
);

export const getBurritoError = createSelector(
    getBurritoState,
    (state: BurritoState) => state.error
);

export const getAllBurritos = createSelector(
    getBurritoState,
    (state: BurritoState) => selectAll(state)
);

export const getBurritoEntities = createSelector(
    getBurritoState,
    (state: BurritoState) => selectEntities(state)
);

export const getSelectedBurritoId = createSelector(
    getBurritoState,
    (state: BurritoState) => state.selectedId
);

export const getSelectedBurrito = createSelector(
    getBurritoEntities,
    getSelectedBurritoId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyBurrito
);
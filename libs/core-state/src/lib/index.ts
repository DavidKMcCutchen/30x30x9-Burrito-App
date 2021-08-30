import { ActionReducerMap } from "@ngrx/store";
import * as fromBurritos from './burritos/burritos.reducer';

export interface AppState {
    [fromBurritos.BURRITO_FEATURE_KEY]: fromBurritos.BurritoState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromBurritos.BURRITO_FEATURE_KEY]: fromBurritos.burritoReducer
};
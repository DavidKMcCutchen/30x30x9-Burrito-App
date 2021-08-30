import { Burrito } from "@burritos/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as BurritoActions from './burritos.actions';

export const BURRITO_FEATURE_KEY = 'burritos';

export interface BurritoState extends EntityState<Burrito> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface BurritoPartialState {
    readonly [BURRITO_FEATURE_KEY]: BurritoState
};

export const burritoAdapter: EntityAdapter<Burrito> = createEntityAdapter<Burrito>();

export const initialBurritoState: BurritoState = burritoAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): BurritoState => ({ ...state, error});

const onDispatch = (state, action): BurritoState => ({
    ...state,
    loaded: false,
    error: null
});

const _burritoReducer = createReducer(
    initialBurritoState,
    on(
        BurritoActions.loadBurritoFailed,
        BurritoActions.loadBurritosFailed,
        BurritoActions.createBurritoFailed,
        BurritoActions.updateBurritoFailed,
        BurritoActions.deleteBurritoFailed,
        onFailed
    ),
    on(
        BurritoActions.loadBurrito,
        BurritoActions.loadBurritos,
        BurritoActions.createBurrito,
        BurritoActions.updateBurrito,
        BurritoActions.deleteBurrito,
        onDispatch
    ),
    on(
        BurritoActions.loadBurritoSuccess, (state, { burrito }) =>
        burritoAdapter.upsertOne(burrito, {...state, loaded: true})
    ),
    on(
        BurritoActions.selectBurrito, (state, { burritoId }) => ({
            ...state,
            selectedId: burritoId
        })
    ),
    on(
        BurritoActions.loadBurritosSuccess, (state, { burritos }) =>
        burritoAdapter.setAll(burritos, {...state, loaded: true})
    ),
    on(
        BurritoActions.deleteBurritoSuccess, (state, { burrito }) =>
        burritoAdapter.removeOne(burrito.id, {...state, loaded: true})
    ),
    on(
        BurritoActions.updateBurritoSuccess, (state, { burrito }) =>
        burritoAdapter.updateOne(
            {id: burrito.id, changes: burrito},
            {...state, loaded: true}
        )
    ),
    on(
        BurritoActions.createBurritoSuccess, (state, {burrito }) =>
        burritoAdapter.addOne(burrito, {...state, loaded: true})
    ),
)

export function burritoReducer(
    state: BurritoState | undefined,
    action: Action
) {
    return _burritoReducer(state, action)
}
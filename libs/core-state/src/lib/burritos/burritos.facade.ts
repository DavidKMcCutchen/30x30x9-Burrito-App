import { Injectable } from "@angular/core";
import { Burrito } from "@burritos/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as BurritoActions from './burritos.actions';
import * as BurritoSelectors from './burritos.selectors';
import * as fromBurritos from './burritos.reducer';


@Injectable({
    providedIn: 'root'
})

export class BurritoFacade {
    allBurritos$ = this.store.pipe(
        map((state) => BurritoSelectors.getAllBurritos(state)),
    )
    selectedBurritos$ = this.store.pipe(select(BurritoSelectors.getSelectedBurrito));
    loaded$ = this.store.pipe(select(BurritoSelectors.getBurritosLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === BurritoActions.createBurrito({} as any) .type ||
        action.type === BurritoActions.updateBurrito({} as any) .type ||
        action.type === BurritoActions.deleteBurrito({} as any) .type
        ))

        selectBurrito(burritoId: string) {
            this.dispatch(BurritoActions.selectBurrito({ burritoId }));
        };

        loadBurritos() {
            this.dispatch(BurritoActions.loadBurritos())
        };

        loadBurrito(burritoId: string) {
            this.dispatch(BurritoActions.loadBurrito({ burritoId }))
        };

        saveBurrito(burrito: Burrito) {
            burrito.id ? this.updateBurrito(burrito) : this.createBurrito(burrito)
        };

        createBurrito(burrito: Burrito) {
            this.dispatch(BurritoActions.createBurrito({ burrito }))
        };

        updateBurrito(burrito: Burrito) {
            this.dispatch(BurritoActions.updateBurrito({ burrito }))
        };

        deleteBurrito(burrito: Burrito) {
            this.dispatch(BurritoActions.deleteBurrito({ burrito }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromBurritos.BurritoPartialState>,
            private actions$: ActionsSubject
        ) {}
}
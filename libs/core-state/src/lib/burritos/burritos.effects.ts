import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Burrito } from '@burritos/api-interfaces';
import { BurritosService } from '@burritos/core-data';
import * as BurritoActions from './burritos.actions';
import { map } from 'rxjs/operators';
import { fetch, pessimisticUpdate } from '@nrwl/angular';

@Injectable()
export class BurritoEffects {
  loadBurrito$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BurritoActions.loadBurrito),
      fetch({
        run: (action) =>
          this.burritosService
            .find(action.burritoId)
            .pipe(
              map((burrito: Burrito) =>
                BurritoActions.loadBurritoSuccess({ burrito })
              )
            ),
        onError: (action, error) => BurritoActions.loadBurritoFailed({ error }),
      })
    )
  );
  loadBurritos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BurritoActions.loadBurritos),
      fetch({
        run: () =>
          this.burritosService
            .all()
            .pipe(
              map((burritos: Burrito[]) =>
                BurritoActions.loadBurritosSuccess({ burritos })
              )
            ),
        onError: (action, error) =>
          BurritoActions.loadBurritosFailed({ error }),
      })
    )
  );
  createBurrito$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BurritoActions.createBurrito),
      pessimisticUpdate({
        run: (action) =>
          this.burritosService
            .create(action.burrito)
            .pipe(
              map((burrito: Burrito) =>
                BurritoActions.createBurritoSuccess({ burrito })
              )
            ),
        onError: (action, error) =>
          BurritoActions.createBurritoFailed({ error }),
      })
    )
  );

  updateBurrito$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BurritoActions.updateBurrito),
      pessimisticUpdate({
        run: (action) =>
          this.burritosService
            .update(action.burrito)
            .pipe(
              map((burrito: Burrito) =>
                BurritoActions.updateBurritoSuccess({ burrito })
              )
            ),
        onError: (action, error) =>
          BurritoActions.updateBurritoFailed({ error }),
      })
    )
  );

  deleteBurrito$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BurritoActions.deleteBurrito),
      pessimisticUpdate({
        run: (action) =>
          this.burritosService
            .delete(action.burrito)
            .pipe(
              map(() =>
                BurritoActions.deleteBurritoSuccess({ burrito: action.burrito })
              )
            ),
        onError: (action, error) =>
          BurritoActions.deleteBurritoFailed({ error }),
      })
    )
  );

  constructor(
    private actions$: Actions,
    private burritosService: BurritosService
  ) {}
}

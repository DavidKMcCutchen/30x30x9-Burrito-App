
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { RootStoreConfig, StoreModule } from "@ngrx/store";
import { CoreDataModule } from '@burritos/core-data';
import { BurritoEffects } from './burritos/burritos.effects';
import { reducers } from ".";


const store_name = 'Burrito Store';


const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};


@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([BurritoEffects]),
    StoreDevtoolsModule.instrument({ name: store_name })
  ],
  providers: []
})

export class CoreStateModule {}
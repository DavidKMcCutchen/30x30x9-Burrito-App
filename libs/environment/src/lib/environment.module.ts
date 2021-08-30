import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BURRITO_ENVIRONMENT } from './burritos.token';
import { BurritoEnvironment } from "./burritos.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: BurritoEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: BURRITO_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
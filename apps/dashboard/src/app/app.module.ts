import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BurritosComponent } from './burritos/burritos.component';
import { BurritoDetailsComponent } from './burritos/burrito-details/burrito-details.component';
import { BurritoListComponent } from './burritos/burrito-list/burrito-list.component';
import { MaterialModule } from "@burritos/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@burritos/core-data";
import { CoreStateModule } from "@burritos/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@burritos/environment';
import { UiLoginModule } from '@burritos/ui-login';
import { BurritoComponent } from './burrito/burrito.component';
import { BurritoInfoComponent } from './burrito/burrito-info/burrito-info.component';

@NgModule({
  declarations: [AppComponent, BurritosComponent, BurritoDetailsComponent, BurritoListComponent, BurritoInfoComponent, BurritoComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

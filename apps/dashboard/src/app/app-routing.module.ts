import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { BurritosComponent } from './burritos/burritos.component';
import { LoginComponent, WildComponent } from "@burritos/ui-login";
import { BurritoComponent } from './burrito/burrito.component';


const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'burritos', component: BurritosComponent},
  { path: 'burritos/:id', component: BurritoComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }


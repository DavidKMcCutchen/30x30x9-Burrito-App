import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Burrito, emptyBurrito } from '@burritos/api-interfaces';
import { BurritoFacade } from '@burritos/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'burritos-burritos',
  templateUrl: './burritos.component.html',
  styleUrls: ['./burritos.component.scss']
})
export class BurritosComponent implements OnInit {
  allBurritos$: Observable<Burrito[]> = this.burritoFacade.allBurritos$;
  selectedBurrito$: Observable<Burrito> = this.burritoFacade.selectedBurritos$;

  form: FormGroup;

  constructor(
    private burritoFacade: BurritoFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.burritoFacade.mutations$.subscribe((_) => this.resetBurrito());
  }

  ngOnInit() {
    this.initForm();
    this.burritoFacade.loadBurritos();
    this.resetBurrito()

    const burritoRouteId = this.route.snapshot.params['id'];

    if (burritoRouteId) {
      this.loadBurrito((burritoRouteId))
    }
  }

  viewBurrito(burritoId: string) {
    this.router.navigate(["burritos", burritoId])
  }

  loadBurrito(burritoId: string) {
    this.burritoFacade.selectBurrito(burritoId);
    this.burritoFacade.loadBurrito(burritoId);
  }

  selectBurrito(burrito: Burrito) {
    this.burritoFacade.selectBurrito(burrito.id)
    this.form.patchValue(burrito);
  }

  saveBurrito(burrito: Burrito) {
    this.burritoFacade.saveBurrito(burrito);
  }

  deleteBurrito(burrito: Burrito) {
    this.burritoFacade.deleteBurrito(burrito);
  }

  resetBurrito() {
    this.form.reset();
    this.selectBurrito(emptyBurrito)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      title: [''],
      beans: [''],
      meat: [''],
      veggies: [''],
      cheese: [''],
      sourCream: [''],
      calories: ['']
    })
  }
}

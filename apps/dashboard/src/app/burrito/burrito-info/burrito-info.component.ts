import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BurritoFacade } from '@burritos/core-state';
import { Burrito } from "@burritos/api-interfaces";

@Component({
  selector: 'burritos-burrito-info',
  templateUrl: './burrito-info.component.html',
  styleUrls: ['./burrito-info.component.scss']
})
export class BurritoInfoComponent {

  @Input() burrito: Burrito | null;


  constructor(
    private burritoFacade: BurritoFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigateBack() {
    this.router.navigate(['/burritos']);
  };

}

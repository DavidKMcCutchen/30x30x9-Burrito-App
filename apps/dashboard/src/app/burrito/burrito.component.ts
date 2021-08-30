import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BurritoFacade } from '@burritos/core-state';

@Component({
  selector: 'burritos-burrito',
  templateUrl: './burrito.component.html',
  styleUrls: ['./burrito.component.scss']
})
export class BurritoComponent implements OnInit {

  currentBurrito$ = this.burritoFacade.selectedBurritos$
  

  constructor(
    private burritoFacade: BurritoFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const burritoId = this.route.snapshot.params.id;
    this.loadBurrito(burritoId);
  }

  loadBurrito(burritoId: string) {
    this.burritoFacade.selectBurrito(burritoId);
    this.burritoFacade.loadBurrito(burritoId);
  }

  navigateBack() {
    this.router.navigate(['/burritos']);
  };

}

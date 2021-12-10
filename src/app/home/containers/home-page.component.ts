import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as fromData from '../data';
import { Different } from '../models';

@Component({
  selector: 'lbk-home-page',
  template: `
    <main>
      <lbk-intro></lbk-intro>

      <lbk-different-list
        [differences]="(differences$ | async)!"
      ></lbk-different-list>

      <lbk-how-we-work></lbk-how-we-work>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  differences$: Observable<Different[]> = of(fromData.differences);
}

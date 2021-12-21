import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as fromData from '../data';
import { Feature } from '../models';

@Component({
  selector: 'lbk-insure-page',
  template: `
    <main>
      <lbk-intro></lbk-intro>

      <lbk-feature-list [features]="(features$ | async)!"></lbk-feature-list>

      <lbk-how-we-work></lbk-how-we-work>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsurePageComponent {
  features$: Observable<Feature[]> = of(fromData.features);
}

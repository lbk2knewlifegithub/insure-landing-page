import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-root',
  template: `
    <lbk-header></lbk-header>

    <router-outlet></router-outlet>

    <lbk-footer></lbk-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}

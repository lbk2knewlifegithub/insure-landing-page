import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Different } from '../models';

@Component({
  selector: 'lbk-different-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container grid place-content-center mt-40 desktop:mt-72">
      <div class="space-y-16 grid justify-items-center desktop:justify-items-start">
        <!--  line decorate-->
        <div class="h-[2px] bg-black/20 w-[180px] desktop:w-[120px]"></div>
        <!--  end line decorate-->

        <h1 class="text-center text-4xl font-heading tablet:text-5xl desktop:text-6xl">We're different</h1>
      </div>

      <!--  different cards-->
      <div class="mt-20 grid gap-16 desktop:grid-cols-3 tablet:mt-28 desktop:mt-20">
        <ng-container *ngFor="let different of differences">
          <lbk-different-card [different]="different"></lbk-different-card>
        </ng-container>
      </div>
      <!--  end different cards-->
    </div>
  `,
})
export class DifferentListComponent {
  @Input() differences!: Different[];
}

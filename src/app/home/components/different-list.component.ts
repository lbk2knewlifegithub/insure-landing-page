import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Different } from '../models';

@Component({
  selector: 'lbk-different-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="container flex flex-col items-center justify-center xl:items-start"
    >
      <!--  line decorate-->
      <div class="mt-40 h-[2px] bg-gray-500 w-[180px]"></div>
      <!--  end line decorate-->

      <h1 class="mt-16 text-center text-5xl font-heading">We're different</h1>

      <!--  different cards-->
      <div class="mt-20 flex flex-wrap gap-20 md:gap-20">
        <ng-container *ngFor="let different of differences">
          <lbk-different-card
            class="flex-1 min-w-[300px]"
            [different]="different"
          ></lbk-different-card>
        </ng-container>
      </div>
      <!--  end different cards-->
    </div>
  `,
})
export class DifferentListComponent {
  @Input() differences!: Different[];
}

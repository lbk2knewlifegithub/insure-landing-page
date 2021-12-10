import { Component, Input } from '@angular/core';

type AlignItems = 'start' | 'center';

@Component({
  selector: 'lbk-modal-ng-content',
  templateUrl: './modal-ng-content.component.html',
  styleUrls: ['./modal-ng-content.component.scss'],
})
export class ModalNgContentComponent {
  @Input('alignItems') alignItems: AlignItems = 'start';
  @Input('zIndex') zIndex = 1000;
}

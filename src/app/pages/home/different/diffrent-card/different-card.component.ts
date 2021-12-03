import { Component, Input } from '@angular/core';
import { Different } from '../../../../shared/models/different.model';

@Component({
  selector: 'lbk-different-card',
  templateUrl: './different-card.component.html',
  styleUrls: ['./different-card.component.scss']
})
export class DifferentCardComponent {
  @Input('different') different!: Different;

}

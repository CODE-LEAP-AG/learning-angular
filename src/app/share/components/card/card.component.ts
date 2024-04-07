import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HighlightDirective } from '@share/directives/highlight.directive';
import { UnlessDirective } from '@share/directives/unless.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HighlightDirective, UnlessDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  condition = false;

  @Input()
  loading = false

  @Input()
  title = ''

  @Output() onCardClick = new EventEmitter()

  handleCardClick() {
    this.onCardClick.emit()
  }

}

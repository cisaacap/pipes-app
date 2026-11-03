import { Component, input } from '@angular/core';

@Component({
  selector: 'pipe-card',
  imports: [],
  templateUrl: './card.html',
})
export class Card {

  title = input.required();

}

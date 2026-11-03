import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { BublesortPipe } from '../../pipes/buble-sort.pipe';
import { heroes } from '../../data/hereos.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    BublesortPipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    HeroFilterPipe
  ],
  templateUrl: './custom-page.html',
})
export default class CustomPage {

  name = signal('Isaach')

  numbers = signal([5, 2, 8, 1, 9]);

  upperCase = signal(true);
  sortCase = signal(true);

  heroes = signal(heroes)

  sortBy = signal<keyof Hero | null>(null)

  changeSortBy(sortBy: keyof Hero | null) {
    this.sortBy.set(sortBy)
  }

  searchQuery = signal('');

}

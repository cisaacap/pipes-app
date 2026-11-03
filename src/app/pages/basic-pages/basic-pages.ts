import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { AviableLocales, LocalService } from '../../services/local.service';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-basic-pages',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-pages.html',
})
export default class BasicPages {

  localService = inject(LocalService);

  nameLower = signal('isaac');
  nameUpper = signal('ISAAC');
  fullName = signal('ISAaC AguIRrE');

  customDate = signal(new Date())

  tickEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date())
    }, 1000);


    onCleanup(() => {
      clearInterval(interval)
    })
  });


  changeLocal(locale: AviableLocales) {
    this.localService.changeLocal(locale);
  }
}

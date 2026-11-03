import { Injectable, signal } from '@angular/core';

export type AviableLocales = 'es' | 'en' | 'fr';

@Injectable({providedIn: 'root'})
export class LocalService {
  private currenLocal = signal<AviableLocales>('es');

  constructor(){
    this.currenLocal.set(localStorage.getItem('locale') as AviableLocales ?? 'es');
  }

  get getCurrentLocal() {
    return this.currenLocal();
  }

  changeLocal(locale: AviableLocales) {
    localStorage.setItem('locale', locale);
    this.currenLocal.set(locale);
    window.location.reload(); // <- Estso recarga el navegaor web
  }



}

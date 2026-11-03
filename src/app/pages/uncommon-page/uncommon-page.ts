import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, TitleCasePipe, AsyncPipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';


const Client1 = {
  name: 'Isaac',
  gender: 'Male',
  age: 17,
  address: 'Guatemala City, Guatemala',
}

const Client2 = {
  name: 'Majo',
  gender: 'Female',
  age: 17,
  address: 'Guatemala City, Guatemala',
}

@Component({
  selector: 'app-uncommon-page',
  imports: [
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe, JsonPipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {

  //i18nSelect <-- Funciona como un switch case, dependiendo del primer argumento, se selecciona el valor del segundo argumento, en este caso el objeto invitationMap
  client = signal(Client1);

  invitationMap = {
    Male: 'invitarlo',
    Female: 'invitarla',
  }

  changeClient(): void {
    if (this.client() === Client1) {
      this.client.set(Client2);
      return;
    }
    this.client.set(Client1);
  }

//i18nPlural <-- Funciona como un switch case, dependiendo del primer argumento, se selecciona el valor del segundo argumento, en este caso el objeto clientsMap

  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    other: 'tenemos # clientes esperando.',
  })

  clients = signal([
    'Isaac',
    'Majo',
    'Juan',
    'Pedro',
    'Maria',
    'Luis',
    'Ana',
  ])

  deleteClient(): void {
    this.clients.update((clients) => clients.slice(1));
  }

  //slice <-- Funciona para cortar un arreglo, en este caso el arreglo de clientes, y mostrar solo los primeros 3 elementos

  //keyvalue <-- Funciona para mostrar un objeto como un arreglo de pares clave-valor
  profile = {
    name: 'Isaac',
    age: 17,
    address: 'Guatemala City, Guatemala',
  }

  // AsyncPipe <-- Funciona para mostrar el valor de un observable o una promesa
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject('No tenemos data en promesa');
      resolve('Tenemos data en promesa');
      console.log('Promesa finalizada');
    }, 3500);
  })

  myObservable = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('Valor emitido por el observable: ', value))
  )

}

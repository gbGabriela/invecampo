import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { Plantio } from '../../entidade/plantio';
@Component({
  selector: 'app-filtro-plantio',
  templateUrl: './filtro-plantio.page.html',
  styleUrls: ['./filtro-plantio.page.scss'],
})
export class FiltroPlantioPage implements OnInit {

  listaPlantio: Observable<Plantio[]>;
  plantio: any;
  filtroPlantio: Plantio[];

  nome: string;
  solo: string;
  clima: string;
  filtro = {}

  constructor(private fire: AngularFireDatabase) {
    this.listaPlantio = this.fire.list<Plantio>('plantio').snapshotChanges().pipe(
      map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
    );
  }

  ngOnInit() {
    this.listaPlantio.subscribe(plantio => {
        this.plantio = plantio;
        this.aplicarFiltro();
    })
  }

  private aplicarFiltro() {
    this.filtroPlantio = _.filter(this.plantio, _.conforms(this.filtro) )
  }

  filtrar(atributo: string, valor: any) {
    this.filtro[atributo] = val => val == valor;
    this.aplicarFiltro();
  }

  filtroStatus(atributo: string, valor: boolean) {
    if (!valor) this.removeFilter(atributo)
    else {
      this.filtro[atributo] = val => val
      this.aplicarFiltro()
    }
  }

  removeFilter(atributo: string) {
    alert(atributo);
    delete this.filtro[atributo]
    this[atributo] = null
    this.aplicarFiltro()
  }
}

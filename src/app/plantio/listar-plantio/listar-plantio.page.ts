import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Plantio } from '../../entidade/plantio';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-plantio',
  templateUrl: './listar-plantio.page.html',
  styleUrls: ['./listar-plantio.page.scss'],
})
export class ListarPlantioPage implements OnInit {

  listaPlantio: Observable<Plantio[]>;

  constructor(
    private fire: AngularFireDatabase,
    private rota: Router
   ){

    this.listaPlantio = this.fire.list<Plantio>('plantio').snapshotChanges().pipe(
      map(lista => lista.map(
        linha => ({key: linha.payload.key, ... linha.payload.val() })
        )
      )
    );

  }

  ngOnInit() {

  }

}

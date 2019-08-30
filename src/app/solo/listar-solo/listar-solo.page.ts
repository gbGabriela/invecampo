import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Solo } from '../../entidade/solo';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-solo',
  templateUrl: './listar-solo.page.html',
  styleUrls: ['./listar-solo.page.scss'],
})
export class ListarSoloPage implements OnInit {

  listaSolo: Observable<Solo[]>;

  constructor(
    private fire: AngularFireDatabase,
    private rota: Router
   ){

    this.listaSolo = this.fire.list<Solo>('solo').snapshotChanges().pipe(
      map(lista => lista.map(
        linha => ({key: linha.payload.key, ... linha.payload.val() })
        )
      )
    );

  }

  ngOnInit() {

  }
}

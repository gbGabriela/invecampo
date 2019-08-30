import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Plantio } from "../../entidade/plantio";
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Solo } from '../../entidade/solo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-salvar-plantio',
  templateUrl: './salvar-plantio.page.html',
  styleUrls: ['./salvar-plantio.page.scss'],
})
export class SalvarPlantioPage implements OnInit {

  plantio: Plantio = new Plantio();

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

  salvar(){
      this.fire.list('plantio').push(this.plantio);
      this.plantio = new Plantio();
      this.rota.navigate(['listar-plantio']);
  }

}

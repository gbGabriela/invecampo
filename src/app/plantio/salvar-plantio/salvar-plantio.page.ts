import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Plantio } from "../../entidade/plantio";
import { Router } from '@angular/router';

@Component({
  selector: 'app-salvar-plantio',
  templateUrl: './salvar-plantio.page.html',
  styleUrls: ['./salvar-plantio.page.scss'],
})
export class SalvarPlantioPage implements OnInit {

  plantio: Plantio = new Plantio();

  constructor(
    private banco: AngularFireDatabase,
    private rota: Router
  ){ }

  ngOnInit() {

  }

  salvar(){
      this.banco.list('plantio').push(this.plantio);
      this.plantio = new Plantio();
      this.rota.navigate(['listar-plantio']);
  }

}

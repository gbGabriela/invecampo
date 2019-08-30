import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Solo } from "../../entidade/solo";
import { Router } from '@angular/router';


@Component({
  selector: 'app-salvar-solo',
  templateUrl: './salvar-solo.page.html',
  styleUrls: ['./salvar-solo.page.scss'],
})
export class SalvarSoloPage implements OnInit {

    solo: Solo = new Solo();

    constructor(
      private banco: AngularFireDatabase,
      private rota: Router
    ){ }

    ngOnInit() {

    }

    salvar(){
        this.banco.list('solo').push(this.solo);
        this.solo = new Solo();
        this.rota.navigate(['listar-solo']);
    }

  }

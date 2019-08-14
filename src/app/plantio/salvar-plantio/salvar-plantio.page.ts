import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: 'app-salvar-plantio',
  templateUrl: './salvar-plantio.page.html',
  styleUrls: ['./salvar-plantio.page.scss'],
})
export class SalvarPlantioPage implements OnInit {

  plantio: Plantio = new Plantio();

  constructor(private banco: AngularFireDatabase){ }

  ngOnInit() {
  }

}

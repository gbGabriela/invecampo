import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPlantioPage } from './filtro-plantio.page';

describe('FiltroPlantioPage', () => {
  let component: FiltroPlantioPage;
  let fixture: ComponentFixture<FiltroPlantioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroPlantioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroPlantioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

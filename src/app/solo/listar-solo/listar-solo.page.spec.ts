import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSoloPage } from './listar-solo.page';

describe('ListarSoloPage', () => {
  let component: ListarSoloPage;
  let fixture: ComponentFixture<ListarSoloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSoloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

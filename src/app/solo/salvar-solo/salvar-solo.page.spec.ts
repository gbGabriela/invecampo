import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarSoloPage } from './salvar-solo.page';

describe('SalvarSoloPage', () => {
  let component: SalvarSoloPage;
  let fixture: ComponentFixture<SalvarSoloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarSoloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarSoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

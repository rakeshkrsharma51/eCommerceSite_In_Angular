import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDoalogBoxComponent } from './modal-doalog-box.component';

describe('ModalDoalogBoxComponent', () => {
  let component: ModalDoalogBoxComponent;
  let fixture: ComponentFixture<ModalDoalogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDoalogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDoalogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

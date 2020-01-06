import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLignesachatComponent } from './edit-lignesachat.component';

describe('EditLignesachatComponent', () => {
  let component: EditLignesachatComponent;
  let fixture: ComponentFixture<EditLignesachatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLignesachatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLignesachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLignesachatComponent } from './new-lignesachat.component';

describe('NewLignesachatComponent', () => {
  let component: NewLignesachatComponent;
  let fixture: ComponentFixture<NewLignesachatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLignesachatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLignesachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

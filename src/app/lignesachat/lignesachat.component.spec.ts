import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LignesachatComponent } from './lignesachat.component';

describe('LignesachatComponent', () => {
  let component: LignesachatComponent;
  let fixture: ComponentFixture<LignesachatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LignesachatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LignesachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

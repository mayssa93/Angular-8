import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAchatComponent } from './new-achat.component';

describe('NewAchatComponent', () => {
  let component: NewAchatComponent;
  let fixture: ComponentFixture<NewAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

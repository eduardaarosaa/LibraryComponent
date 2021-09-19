import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoComponenteComponent } from './botao-componente.component';

describe('BotaoComponenteComponent', () => {
  let component: BotaoComponenteComponent;
  let fixture: ComponentFixture<BotaoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Segundocomponentew } from './segundocomponentew';

describe('Segundocomponentew', () => {
  let component: Segundocomponentew;
  let fixture: ComponentFixture<Segundocomponentew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Segundocomponentew],
    }).compileComponents();

    fixture = TestBed.createComponent(Segundocomponentew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phrases } from './phrases';

describe('Phrases', () => {
  let component: Phrases;
  let fixture: ComponentFixture<Phrases>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Phrases]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Phrases);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

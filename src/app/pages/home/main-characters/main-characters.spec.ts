import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCharacters } from './main-characters';

describe('MainCharacters', () => {
  let component: MainCharacters;
  let fixture: ComponentFixture<MainCharacters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCharacters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCharacters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

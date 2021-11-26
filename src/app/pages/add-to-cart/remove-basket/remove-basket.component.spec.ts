import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBasketComponent } from './remove-basket.component';

describe('RemoveBasketComponent', () => {
  let component: RemoveBasketComponent;
  let fixture: ComponentFixture<RemoveBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMinerComponent } from './create-miner.component';

describe('CreateMinerComponent', () => {
  let component: CreateMinerComponent;
  let fixture: ComponentFixture<CreateMinerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMinerComponent]
    });
    fixture = TestBed.createComponent(CreateMinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

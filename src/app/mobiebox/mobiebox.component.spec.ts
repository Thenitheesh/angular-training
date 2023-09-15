import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobieboxComponent } from './mobiebox.component';

describe('MobieboxComponent', () => {
  let component: MobieboxComponent;
  let fixture: ComponentFixture<MobieboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobieboxComponent]
    });
    fixture = TestBed.createComponent(MobieboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

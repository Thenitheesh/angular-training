import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialMovieuiComponent } from './material-movieui.component';

describe('MaterialMovieuiComponent', () => {
  let component: MaterialMovieuiComponent;
  let fixture: ComponentFixture<MaterialMovieuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialMovieuiComponent]
    });
    fixture = TestBed.createComponent(MaterialMovieuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

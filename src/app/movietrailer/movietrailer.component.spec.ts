import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietrailerComponent } from './movietrailer.component';

describe('MovietrailerComponent', () => {
  let component: MovietrailerComponent;
  let fixture: ComponentFixture<MovietrailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovietrailerComponent]
    });
    fixture = TestBed.createComponent(MovietrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

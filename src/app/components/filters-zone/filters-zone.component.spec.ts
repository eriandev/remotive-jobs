import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersZoneComponent } from './filters-zone.component';

describe('FiltersZoneComponent', () => {
  let component: FiltersZoneComponent;
  let fixture: ComponentFixture<FiltersZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltersZoneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

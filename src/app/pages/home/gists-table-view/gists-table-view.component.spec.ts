import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GistsTableViewComponent } from './gists-table-view.component';

describe('GistsTableViewComponent', () => {
  let component: GistsTableViewComponent;
  let fixture: ComponentFixture<GistsTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GistsTableViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GistsTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

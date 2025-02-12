import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GistsCardViewComponent } from './gists-card-view.component';

describe('GistsCardViewComponent', () => {
  let component: GistsCardViewComponent;
  let fixture: ComponentFixture<GistsCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GistsCardViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GistsCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

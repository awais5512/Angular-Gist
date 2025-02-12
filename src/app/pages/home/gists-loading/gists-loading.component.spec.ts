import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GistsLoadingComponent } from './gists-loading.component';

describe('GistsLoadingComponent', () => {
  let component: GistsLoadingComponent;
  let fixture: ComponentFixture<GistsLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GistsLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GistsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

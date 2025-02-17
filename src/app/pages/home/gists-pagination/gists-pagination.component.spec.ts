import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GistsPaginationComponent } from './gists-pagination.component';

describe('GistsPaginationComponent', () => {
  let component: GistsPaginationComponent;
  let fixture: ComponentFixture<GistsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GistsPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GistsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

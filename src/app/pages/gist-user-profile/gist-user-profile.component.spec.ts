import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GistProfileComponent } from './gist-user-profile.component';

describe('GistProfileComponent', () => {
  let component: GistProfileComponent;
  let fixture: ComponentFixture<GistProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GistProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GistProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

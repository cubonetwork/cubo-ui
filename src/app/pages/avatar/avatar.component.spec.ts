import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAvatarComponent } from './avatar.component';

describe('PageAvatarComponent', () => {
  let component: PageAvatarComponent;
  let fixture: ComponentFixture<PageAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

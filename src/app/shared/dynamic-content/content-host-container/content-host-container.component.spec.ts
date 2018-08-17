import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHostContainerComponent } from './content-host-container.component';

describe('ContentHostContainerComponent', () => {
  let component: ContentHostContainerComponent;
  let fixture: ComponentFixture<ContentHostContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentHostContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

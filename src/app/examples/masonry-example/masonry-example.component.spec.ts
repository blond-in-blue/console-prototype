import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryExampleComponent } from './masonry-example.component';

describe('MasonryExampleComponent', () => {
  let component: MasonryExampleComponent;
  let fixture: ComponentFixture<MasonryExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasonryExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

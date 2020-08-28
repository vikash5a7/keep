import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TootlbarComponent } from './tootlbar.component';

describe('TootlbarComponent', () => {
  let component: TootlbarComponent;
  let fixture: ComponentFixture<TootlbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TootlbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TootlbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

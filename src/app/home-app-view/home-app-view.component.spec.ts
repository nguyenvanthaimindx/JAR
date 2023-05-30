import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAppViewComponent } from './home-app-view.component';

describe('HomeAppViewComponent', () => {
  let component: HomeAppViewComponent;
  let fixture: ComponentFixture<HomeAppViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAppViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAppViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

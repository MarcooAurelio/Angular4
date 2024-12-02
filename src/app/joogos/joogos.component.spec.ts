import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoogosComponent } from './joogos.component';

describe('JoogosComponent', () => {
  let component: JoogosComponent;
  let fixture: ComponentFixture<JoogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoogosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

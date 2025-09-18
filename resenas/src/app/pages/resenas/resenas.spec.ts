import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenasComponent } from '../resenas/resenas.component';

describe('Resenas', () => {
  let component: ResenasComponent;
  let fixture: ComponentFixture<ResenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResenasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

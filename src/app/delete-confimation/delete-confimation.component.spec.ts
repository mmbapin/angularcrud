import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfimationComponent } from './delete-confimation.component';

describe('DeleteConfimationComponent', () => {
  let component: DeleteConfimationComponent;
  let fixture: ComponentFixture<DeleteConfimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConfimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteConfimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

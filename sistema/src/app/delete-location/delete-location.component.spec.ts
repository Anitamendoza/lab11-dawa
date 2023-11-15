import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLocationComponent } from './delete-location.component';

describe('DeleteLocationComponent', () => {
  let component: DeleteLocationComponent;
  let fixture: ComponentFixture<DeleteLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteLocationComponent]
    });
    fixture = TestBed.createComponent(DeleteLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

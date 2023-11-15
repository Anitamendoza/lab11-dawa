import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTiendasComponent } from './eliminar-tiendas.component';

describe('EliminarTiendasComponent', () => {
  let component: EliminarTiendasComponent;
  let fixture: ComponentFixture<EliminarTiendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarTiendasComponent]
    });
    fixture = TestBed.createComponent(EliminarTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

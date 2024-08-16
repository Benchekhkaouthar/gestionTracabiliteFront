import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichierViewComponent } from './fichier-view.component';

describe('FichierViewComponent', () => {
  let component: FichierViewComponent;
  let fixture: ComponentFixture<FichierViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichierViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichierViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

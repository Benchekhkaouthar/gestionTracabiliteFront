import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichierFormComponent } from './fichier-form.component';

describe('FichierFormComponent', () => {
  let component: FichierFormComponent;
  let fixture: ComponentFixture<FichierFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichierFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDossierComponent } from './view-dossier.component';

describe('ViewDossierComponent', () => {
  let component: ViewDossierComponent;
  let fixture: ComponentFixture<ViewDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDossierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

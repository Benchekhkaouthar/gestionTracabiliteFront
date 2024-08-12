import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dossier-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule, 
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule, 
    MatCardModule,
    ReactiveFormsModule
  ],
  templateUrl: './dossier-form.component.html',
  styleUrl: './dossier-form.component.scss'
})
export class DossierFormComponent {

  private fb = inject(FormBuilder); 
  private route = inject(Router);
 
 
 form ?: FormGroup;

 cadreAchats = [
  {value: 'SMA/01/24',name: 'SMA/01/24'},
  {value: 'SMA/02/24',name: 'SMA/02/24'}
];

ngOnInit(): void {
  this.form = this.fb.group({
    cadreAchat: ['', [Validators.required]],
    intitule: ['', [Validators.required]], 
    file: ['', Validators.required]
  });
}

saveDossier(): void {

}

}

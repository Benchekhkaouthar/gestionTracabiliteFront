import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-type-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule, 
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule, 
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './type-form.component.html',
  styleUrl: './type-form.component.scss'
})
export class TypeFormComponent {

  form ?: FormGroup;
  private fb = inject(FormBuilder); 

  ngOnInit(): void {
    this.form = this.fb.group({
      type: ['', [Validators.required]]
    });
  }

  saveType(): void {

  }

}

import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-facture-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule, 
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule, 
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './facture-form.component.html',
  styleUrl: './facture-form.component.scss'
})
export class FactureFormComponent {

  private fb = inject(FormBuilder); 
  private route = inject(Router);

  fileName = '';
 
 form ?: FormGroup;

 imageName = signal('');
  fileSize = signal(0);
  uploadProgress = signal(0); 
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  selectedFile: File | null = null;
  uploadSuccess: boolean = false;
  uploadError: boolean = false;
  private snackBar = inject(MatSnackBar)


 dossiers = [
  {value: 'SMA/01/24-1',name: 'SMA/01/24-1'},
  {value: 'SMA/02/24-2',name: 'SMA/02/24-2'}
];

ngOnInit(): void {
  this.form = this.fb.group({
    dossier: ['', [Validators.required]],
    dateFichier: ['', [Validators.required]], 
    delaiANePasDepasser: ['', [Validators.required]], 
    type: ['', [Validators.required]], 
    file: ['', Validators.required]
  });
}

saveFacture(): void {

}
  

// file upload:
  // Handler for file input change
  onFileChange(event: any): void {
    const file = event.target.files[0] as File | null;
    this.uploadFile(file);
  }

  // Handler for file drop
  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    const file = event.dataTransfer?.files[0] as File | null;
    this.uploadFile(file);
  }

  // Prevent default dragover behavior
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }


  uploadFile(file: File | null): void {
    if (file && file.type === 'application/pdf') {
      this.selectedFile = file;
      this.fileSize.set(Math.round(file.size / 1024)); // Set file size in KB
      this.imageName.set(file.name); // Set file name
   
      this.uploadSuccess = true;
      this.uploadError = false;
    } else {
      this.uploadSuccess = false;
      this.uploadError = true;
      this.snackBar.open('Only PDF files are supported!', 'Close', {
        duration: 3000,
        panelClass: 'error',
      });
    }
  }
  
  

  // Method to remove the uploaded image
  removeImage(): void {
    this.selectedFile = null;
    this.imageName.set('');
    this.fileSize.set(0); 
    this.uploadSuccess = false;
    this.uploadError = false;
    this.uploadProgress.set(0);
  }
  
  


}

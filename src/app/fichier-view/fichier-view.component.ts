import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-fichier-view',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './fichier-view.component.html',
  styleUrl: './fichier-view.component.scss'
})
export class FichierViewComponent {

 // private http = inject(HttpClient);

  pdfUrl: string | undefined;

  ngOnInit(): void {
    //const pdfId = 'your-pdf-id';
    //this.fetchPdfUrl(pdfId);
  }

  fetchPdfUrl(pdfId: string): void {
  //   this.http.get<{ url: string }>(`/api/getPdfUrl/${pdfId}`).subscribe({
  //     next: (response) => {
  //       this.pdfUrl = response.url;
  //     },
  //     error: (error) => {
  //       console.error('Error fetching PDF URL', error);
  //     }
  //   });
  }
}

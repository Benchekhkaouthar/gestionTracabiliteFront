import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface FichierListItem {
  fichier: string;
  dossier: string;
  type: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: FichierListItem[] = [
  {id: 1, fichier: 'BR 01/23', type: 'BR', dossier:'SMA/01/24-1'},
  {id: 2, fichier: 'BRI 01/24 ', type: 'BRI', dossier:'SMA/01/24-1'},
  {id: 3, fichier: 'BL 01/24', type: 'BL', dossier:'SMA/01/24-1'},
  {id: 4, fichier: 'Attachement 01/24', type: 'Attachement', dossier:'SMA/01/24-1'},
  {id: 5, fichier: 'Fiche de pénalité 01/24', type: 'Fiche de pénalité', dossier:'SMA/01/24-1'},
  {id: 6, fichier: 'Décompte 01/24', type: 'Décompte', dossier:'SMA/01/24-1'}
];

/**
 * Data source for the FichierList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class FichierListDataSource extends DataSource<FichierListItem> {
  data: FichierListItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<FichierListItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: FichierListItem[]): FichierListItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: FichierListItem[]): FichierListItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.fichier, b.fichier, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

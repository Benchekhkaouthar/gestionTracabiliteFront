import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'cadreAchats',
        loadComponent:()=>
            import('./cadre-achat-list/cadre-achat-list.component').then(
                (m) => m.CadreAchatListComponent
            ),
        title:'Cadre achat'
    },
    {
        path: 'dossiers',
        loadComponent:()=>
            import('./dossier-list/dossier-list.component').then(
                (m) => m.DossierListComponent
            ),
        title:'Dossier'
    },
    {
        path: 'dossier-form',
        loadComponent:()=>
            import('./dossier-form/dossier-form.component').then(
                (m) => m.DossierFormComponent
            ),
            title:'Ajouter un dossier'
    },
    {
        path: 'factures',
        loadComponent:()=>
            import('./facture-list/facture-list.component').then(
                (m) => m.FactureListComponent
            ),
        title:'Facture'
    },
    {
        path: 'facture-form',
        loadComponent:()=>
            import('./facture-form/facture-form.component').then(
                (m) => m.FactureFormComponent
            ),
            title:'Ajouter une facture'
    }
];

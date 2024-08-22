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
    },
    {
        path: 'types',
        loadComponent:()=>
            import('./type-list/type-list.component').then(
                (m) => m.TypeListComponent
            ),
        title:'Type de fichier'
    }, 
    {
        path: 'type-form',
        loadComponent:()=>
            import('./type-form/type-form.component').then(
                (m) => m.TypeFormComponent
            ),
            title:'Ajouter un type'
    },
    {
        path: 'fichiers',
        loadComponent:()=>
            import('./fichier-list/fichier-list.component').then(
                (m) => m.FichierListComponent
            ),
        title:'Fichier'
    },
    {
        path: 'fichier-form',
        loadComponent:()=>
            import('./fichier-form/fichier-form.component').then(
                (m) => m.FichierFormComponent
            ),
        title:'Ajouter un fichier'
    },
    {
        path: 'view-dossier',
        loadComponent:()=>
            import('./view-dossier/view-dossier.component').then(
                (m) => m.ViewDossierComponent
            ),
        title:'Dossier'
    }
];

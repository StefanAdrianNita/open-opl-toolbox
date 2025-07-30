import { Routes } from '@angular/router';
import {LibraryPageComponent} from "../app/pages/library-page/library-page.component"

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: LibraryPageComponent
    }
];

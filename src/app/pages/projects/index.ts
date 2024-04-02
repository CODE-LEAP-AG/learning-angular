import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'movies',
        loadComponent: async () => (await import('./movies/movies.component')).MoviesComponent
    }
]
import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'movies',
        title: "Cl Movie",
        loadComponent: async () => (await import('./movies/movies.component')).MoviesComponent
    }
]
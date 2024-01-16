import { Routes } from '@angular/router';
import { HomeFeatureComponent } from './features/home-feature/home-feature.component';
import { StarterFeatureComponent } from './features/starter-feature/starter-feature.component';

export const routes: Routes = [
    {path: '', component: HomeFeatureComponent},
    {path: 'starter', component: StarterFeatureComponent},
];

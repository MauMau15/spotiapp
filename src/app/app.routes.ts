import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { AtistaComponent } from './components/atista/atista.component';

export const ROUTES = [
    {path:'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path:'artist/:id',component:AtistaComponent},
    {path: '',pathMatch:'full',redirectTo:'home'},
    {path: '**',pathMatch:'full',redirectTo:'home'}
];
import { Routes } from '@angular/router';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ProductsComponent } from './pages/products/products.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"contactus",component:ContactusComponent},
    {path:"products",component:ProductsComponent},
    {path:"products/:id",component:SinglepageComponent},
    {path:"aboutus",component:AboutusComponent},
];

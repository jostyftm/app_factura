import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard/home',
    loadChildren: () => import('./pages/dashboard/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'invoices',
    loadChildren: () => import('./pages/dashboard/invoices/invoices.module').then( m => m.InvoicesPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/dashboard/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/dashboard/categories/categories.module').then( m => m.CategoriesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

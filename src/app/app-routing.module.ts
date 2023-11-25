import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { OrderPageComponent } from './component/order-page/order-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CategoryDetailsComponent } from './category-details/category-details/category-details.component';
import { CategorySubdetailsComponent } from './category-subdetails/category-subdetails/category-subdetails.component';


const routes: Routes = [
  {
    path:'', redirectTo: 'dashboard', pathMatch:'full'
  },
  {
    path:'dashboard', component:ProductViewComponent
  },
  {
    path:'product-detail/:productid', component:ProductDetailComponent
  },
  {
    path:'category-detail/:productid', component:CategoryDetailsComponent
  },
  {
    path:'category-subdetail/:productid', component:CategorySubdetailsComponent
  },
  {
    path:'cart-page', component:CartPageComponent
  },
  {
    path:'order-page', component:OrderPageComponent
  },
  {
    path:'products', component:ProductsComponent
  },
  {
    path:'statistics', component:StatisticsComponent
  },
  {
    path:'coupens', component:CoupensComponent
  },
  {
    path:'favorites', component:FavoritesComponent
  },
  {
    path:'pages', component:PagesComponent
  },
  {
    path:'media', component:MediaComponent
  },
  {
    path:'settings', component:SettingsComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

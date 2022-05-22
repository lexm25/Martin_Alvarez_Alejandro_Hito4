import { HomeComponent } from './home/home.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ShopComponent } from './shop/shop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'add', component: NewArticleComponent
  },
  {
    path: 'edit/:aritcleId', component: EditArticleComponent
  },
  {
    path: 'articles', component: ArticlesComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'product-info', component: ProductInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

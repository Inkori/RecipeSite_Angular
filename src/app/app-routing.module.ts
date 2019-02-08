import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipesDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },

  ] },
  { path: 'shoping-list', component: ShopingListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

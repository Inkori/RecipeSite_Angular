import { Recipe } from './../recipes.model';
import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.servece';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeServese: RecipeService) { }

  ngOnInit() {
  }
  onAddToShoppingList() {
    this.recipeServese.addIngridientsToShopingList(this.recipe.ingridients);
  }

}

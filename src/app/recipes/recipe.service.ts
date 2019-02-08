import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from '../shoping-list/shoping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'Text fish fish',
      `https://www.maxpixel.net/static/photo/1x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg`,
      [
        new Ingredient('Meat', 1),
        new Ingredient('Burger', 1)
      ]),
    new Recipe(
      'A test recipe ANOTHER TEXT',
      'Second recipe',
      `https://upload.wikimedia.org/wikipedia/commons/9/9e/Hapalos_Artos_%28soft_bread%29%2C_a_traditional_Ancient_Roman_recipe_for_a_classic_fine_bread%2C_from_Athenaeus%27_Deipnosophistae_%2815734156204%29.jpg`,
      [
        new Ingredient('Free', 1),
        new Ingredient('Salat', 1)
      ])
  ];

  constructor(private slServise: ShopingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngridientsToShopingList( ingridients: Ingredient[]) {
    this.slServise.addIngredients(ingridients);
  }
}

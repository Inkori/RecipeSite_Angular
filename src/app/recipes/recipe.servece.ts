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
      `https://get.pxhere.com/photo/restaurant-dish-meal-food-salad-vegetable-plate-seafood-kitchen-recipe-snack-eat-fast-food-lunch-cuisine-chicken-rice-broccoli-asian-food-garnish-dinner-vegetarian-food-potatoes-junk-food-thai-food-side-dish-diet-food-leaf-vegetable-1375811.jpg`,
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

  addIngridientsToShopingList( ingridients: Ingredient[]) {
    this.slServise.addIngredients(ingridients);
  }
}

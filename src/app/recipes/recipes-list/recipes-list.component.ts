import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[];
  // = [
  //   new Recipe('A test recipe', 'Text fish fish', `https://get.pxhere.com/photo/restaurant-dish-meal-food-salad-vegetable-plate-seafood-kitchen-recipe-snack-eat-fast-food-lunch-cuisine-chicken-rice-broccoli-asian-food-garnish-dinner-vegetarian-food-potatoes-junk-food-thai-food-side-dish-diet-food-leaf-vegetable-1375811.jpg`),
  //   new Recipe('A test recipe ANOTHER TEXT', 'Second recipe', `https://upload.wikimedia.org/wikipedia/commons/9/9e/Hapalos_Artos_%28soft_bread%29%2C_a_traditional_Ancient_Roman_recipe_for_a_classic_fine_bread%2C_from_Athenaeus%27_Deipnosophistae_%2815734156204%29.jpg`)
  // ];
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}

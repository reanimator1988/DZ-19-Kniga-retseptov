"use strict";

class Recipe {
  constructor(name, ingredients, instructions, cookingTime) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.cookingTime = cookingTime;
  }

  isValid() {
    if (
      typeof this.name === "string" &&
      Array.isArray(this.ingredients) &&
      typeof this.instructions === "string" &&
      typeof this.cookingTime === "number"
    ) {
      return true;
    } else {
      return false;
    }
  }
}

class RecipeBook {
  recipes = [];

  addRecipe(recipe) {
    if (recipe.isValid()) {
      this.recipes.push(recipe);
      console.log("Рецепт успішно доданий до книги рецептів.");
    } else {
      console.log("Невалідний рецепт. Рецепт не було додано до книги рецептів.");
    }
  }
  findRecipesByCookingTime(cookingTime) {
    const recipesByCookingTime = this.recipes.filter(recipe => recipe.cookingTime <= cookingTime);
    const recipeNames = recipesByCookingTime.map(recipe => recipe.name);
    const message = `Рецепти з часом приготування не довше ${cookingTime} хвилин: ${recipeNames.join(', ')}`;
    console.log(message);
  }

  findRecipesByIngredients(ingredients) {
    const recipesByIngredients = this.recipes.filter(recipe => {
      return ingredients.every(ingredient => recipe.ingredients.includes(ingredient));
    });

    const recipeNames = recipesByIngredients.map(recipe => recipe.name);
    const message = `Рецепти з інгредієнтами ${ingredients.join(', ')}: ${recipeNames.join(', ')}`;
    console.log(message);
  }
  printRecipes() {
    console.log(this.recipes);
  }
}

const recipeBook = new RecipeBook();

const recipe1 = new Recipe('Пюре', ['Картопля', 'Морква'], 'Варити картоплю', 30);
recipeBook.addRecipe(recipe1);

const recipe2 = new Recipe('Жарена Картошка', ['Картопля', 'Цибуля'], 'Жарити картоплю', 45);
recipeBook.addRecipe(recipe2);

const recipe3 = new Recipe('Салат', ['Морква', 'Цибуля'], 'Нарізати овощі', 120);
recipeBook.addRecipe(recipe3);

const recipe4 = new Recipe('Мівіна', ['Макароны', 'Цибуля'], 'Варити в кастрюлі', 60);
recipeBook.addRecipe(recipe4);

const recipe5 = new Recipe('Рагу', ['цибуля', 'помідор'], ['картопля']);
recipeBook.addRecipe(recipe5);

console.log(recipeBook.findRecipesByCookingTime(60));
console.log(recipeBook.findRecipesByIngredients(['Картопля', 'Морква']));
recipeBook.printRecipes();













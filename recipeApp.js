// Define the Recipe interface
class RecipeSelector {
    constructor() {
      this.recipes = [
        {
          id: 1,
          title: 'Pancakes',
          category: 'dessert',
          ingredients: ['flour', 'sugar', 'milk', 'eggs', 'butter'],
          instructions: 'Mix the ingredients, cook on a hot griddle, and enjoy!'
        },
        {
          id: 2,
          title: 'Guacamole',
          category: 'appetizer',
          ingredients: ['avocado', 'tomato', 'onion', 'lime', 'salt'],
          instructions: 'Mash the avocado, mix with the other ingredients, and serve!'
        },
        {
          id: 3,
          title: 'Spaghetti Bolognese',
          category: 'main_course',
          ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onion', 'garlic'],
          instructions: 'Cook the spaghetti, brown the ground beef with the onion and garlic, add the tomato sauce, and serve!'
        },
        {
          id: 4,
          title: 'Roasted Vegetables',
          category: 'side_dish',
          ingredients: ['carrots', 'potatoes', 'broccoli', 'olive oil', 'salt'],
          instructions: 'Chop the vegetables, toss with olive oil and salt, and roast in the oven until tender!'
        }
      ];
    }
  
    // Get all the recipes or only the ones in a specific category
    getRecipes(category) {
      if (category) {
        return this.recipes.filter(recipe => recipe.category === category);
      } else {
        return this.recipes;
      }
    }
  
    // Get a random recipe or a random recipe in a specific category
    getRandomRecipe(category) {
      const recipes = this.getRecipes(category);
      const index = Math.floor(Math.random() * recipes.length);
      return recipes[index];
    }
  }
  
  // Wrap your code in a DOMContentLoaded event listener to make sure the HTML has loaded before the JavaScript runs.
  document.addEventListener('DOMContentLoaded', () => {
    // Create a new instance of the RecipeAPI class
    const recipeAPI = new RecipeSelector();
  
    // Get the DOM elements
    const categorySelect = document.getElementById('category');
    const randomRecipeButton = document.getElementById('random-recipe-button');
    const recipeContainer = document.getElementById('recipe-container');
  
    // Handle the button click event
    randomRecipeButton.addEventListener('click', () => {
      // Get the selected category
      const category = categorySelect.value;
  
      // Get a random recipe based on the selected category
      const recipe = recipeAPI.getRandomRecipe(category);
  
      // Render the recipe in the recipe container
      const recipeHTML = `
        <h2>${recipe.title}</h2>
        <p>Category: ${recipe.category}</p>
        <h3>Ingredients:</h3>
        <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
        <h3>Instructions:</h3>
        <p>${recipe.instructions}</p>
      `;
      recipeContainer.innerHTML = recipeHTML;
    });
  });
  
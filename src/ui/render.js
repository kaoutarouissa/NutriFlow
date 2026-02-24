//  Fonctions d'affichage des listes et modales

import { getAllRecipes } from '../api/recipeProvider.js';;


export async function displayRecipes() {//had fnc pour aff rcip via api

  const container = document.getElementById("recipes-container");//container li f index

  const recipes = await getAllRecipes();

  container.innerHTML = ""; // pour vider container

  recipes.forEach(recipe => {

    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.margin = "10px";
    card.style.padding = "10px";

    const img = document.createElement("img");
    img.src = recipe.image;
    img.style.width = "150px";

    const title = document.createElement("h3");
    title.textContent = recipe.name;

    card.appendChild(img);
    card.appendChild(title);

    container.appendChild(card);
  });
}


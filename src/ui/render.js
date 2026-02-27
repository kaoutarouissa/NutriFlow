export function displayRecipes(recipes) {
  const container = document.getElementById("recipes-container");
  const recipeAffiche=document.getElementById("recipeSearch")
 const heading = document.getElementById("titleh2");
 const searchInput = document.getElementById("Input");
 searchInput.placeholder = "Search recipes...";
heading.textContent = "Our Healthy Recipes";
  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.style.border = "1px solid #000";
    card.style.margin = "10px";
    card.style.padding= "10px";

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
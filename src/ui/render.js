export function displayRecipes(recipes) {
  const container = document.getElementById("recipes-container");
  const recipeAffiche=document.getElementById("recipeSearch")
 const heading = document.getElementById("titleh2");
 const searchInput = document.getElementById("Input");
 searchInput.placeholder = "I would like to cook...";
heading.textContent = "Find best recipes for cooking";
  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `<div class="div1">
      <h3 class="recipe-title">${recipe.name}</h3>
      <div class="div2">
              <img class="recipe-img" src="../images/heart.png" alt="">
        <img class="recipe-img" src="../images/calories.png" alt="">
        </div>
        </div>


        <div class="img">
            <img class="icon-share" src="${recipe.image}" alt="${recipe.image}">
          </div>
        
    `;

    container.appendChild(card);
})}
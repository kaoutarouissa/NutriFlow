//  Fonctions fetch() : getAllRecipes, searchRecipes (appel interier)

// import { show } from "../ui/loader<";

export async function getAllRecipes() {
  
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json(); 
    return data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:");}
  
}

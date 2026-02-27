//  Fonctions fetch() : getAllRecipes, searchRecipes (appel interier)

// import { show } from "../ui/loader<";

export async function getAllRecipes() {
  
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json(); 
    console.log("recive data",data)
    return data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:");}
  
}

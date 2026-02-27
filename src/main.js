import { getAllRecipes } from "./api/recipeProvider.js";
import { displayRecipes } from "./ui/render.js";
import { show, hide, loader } from "./ui/loader.js"; 

const btn = document.getElementById("introbtn");
const container = document.getElementById("recipes-container");
// const title=document.getElementById("title")
const input=document.getElementById("Input")
const Container=document.getElementById("Container")
btn.addEventListener("click", () => {
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "#fff";
//  title.style.display = "none";
  btn.style.display = "none";
  input.style.display="block"
  Container.style.display="none";
  setTimeout(loader(), 2000);
  initApp();
});

async function initApp() {
  try {
    
    const recipes = await getAllRecipes();
    console.log("Data reçues:", recipes);
  
    
    displayRecipes(recipes);

  } catch (error) {
    console.error("Erreur d'affichage :" +error);
    show();

  }
}
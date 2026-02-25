// Point d'entrée : orchestre l'allumage de l'app
import { getAllRecipes} from './api/recipeProvider.js';
import { displayRecipes } from './ui/render.js';

const btn = document.getElementById("introbtn");// puis index lie direct m3a main dert event btn

btn.addEventListener("click", () => {
          document.body.style.backgroundImage = "none";

    document.body.style.backgroundColor = "white";
    

  displayRecipes();
});
async function initApp() {//had fnc pour test fn getrec li katjib data mn api
    try {
        const recipes = await getAllRecipes(); // NJIB data mn getAllRecipes 
        
        console.log("tester Data mni jat:", recipes)             // pour test f console
    } catch (error) {
        console.error("Erreur d'affichage :", error);
    }
}

initApp();

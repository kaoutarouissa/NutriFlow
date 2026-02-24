//  Fonctions fetch() : getAllRecipes, searchRecipes (appel interier)
  export async function getAllRecipes() {//asunc travail with fnc prend temp pour exect
  try {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();//reponse sous forme de json
return data.recipes; 
    
    // console.log("tester my data de api",data);

  } catch (error) {
    console.error('thas is catch Error:', error);
  }
}


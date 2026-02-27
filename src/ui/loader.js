const loaderContainer = document.getElementById("msgloader");
const spinner = document.getElementById("spiner");
const message = document.getElementById("mymsg");

export function loader(){
      spinner.style.display="block";

}
export function show(messageText = "Veuillez patienter...Il ya un error lors le chargement du Recipes") {
 
    loaderContainer.classList.remove("hidden");
    spinner.classList.remove("hidden");
    message.classList.remove("hidden")
    message.textContent = messageText;
  
}


export function hide() {
 
    loaderContainer.classList.add("hidden");
    spinner.classList.add("hidden");
  
}
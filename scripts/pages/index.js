// Fonction pour récuperer les données du json
async function getPhotographers() {
  return fetch("../data/photographers.json")
    .then((file) => file.json())
    .then((data) => data.photographers);
}

//Fonction pour créer les cartes des photographes
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const Template = new PhotographerCard(photographer);
    photographersSection.appendChild(Template.createPhotographerCard());
  });
}

//Fonction d'initiation de la page d'accueil
async function init() {
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();

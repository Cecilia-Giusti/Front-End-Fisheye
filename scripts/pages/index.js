/* eslint-disable no-undef */

//Fonction pour créer le tableaux des photographes
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
  document.querySelector("header img").focus();
}

init();

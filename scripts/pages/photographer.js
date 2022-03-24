// Fonction pour récuperer les données du json
async function getPhotographersHeader() {
  return fetch("../data/photographers.json")
    .then((file) => file.json())
    .then((data) => data.photographers);
}

//Fonction pour créer la section de présentation du photographe
async function displayDataHeader(photographers) {
  const photographersHeaderPage = document.querySelector(".photograph-header");

  photographers.forEach((photographer) => {
    const template = new PhotographerHeaderPage(photographer);
    photographersHeaderPage.appendChild(
      template.createPhotographerHeaderPage()
    );
  });
}

//Fonction d'initiation de la page d'accueil
async function init() {
  const photographers = await getPhotographersHeader();
  displayDataHeader(photographers);
}

init();

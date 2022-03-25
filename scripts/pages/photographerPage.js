// Fonction pour récuperer les données du json des photographes
async function getPhotographersHeader() {
  return fetch("../data/photographers.json")
    .then((file) => file.json())
    .then((data) => data.photographers);
}

//Fonction pour créer la section de présentation du photographe
function displayDataHeader(photographerFind) {
  const photographersHeaderPage = document.querySelector(".photograph-header");
  console.log(photographerFind);

  const photographer = new photographerHeader(photographerFind);
  const template = new PhotographerPageHeader(photographer);
  photographersHeaderPage.appendChild(template.createPhotographerHeaderPage());
}

// Fonction pour récupérer l'id du photographe
function getPhotographer(photographer) {
  // Récupération de l'id du photographe dans la barre de naviguation
  const params = new URLSearchParams(document.location.search);
  const idPhotographerGetString = params.get("id");

  //Transformation de l'id en nombre
  const idPhotographerGet = Number(idPhotographerGetString);

  return photographer.id === idPhotographerGet;
}

//Fonction d'initiation de la page d'accueil
async function init() {
  // Récupération du fichier Json
  const photographers = await getPhotographersHeader();
  console.log(photographers);

  // Récupération de l'indice du photographe
  const indPhotographer = photographers.findIndex(getPhotographer);
  const photographerFind = photographers[indPhotographer];
  console.log(photographerFind);
  displayDataHeader(photographerFind);
}

init();

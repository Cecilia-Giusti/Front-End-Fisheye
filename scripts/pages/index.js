/* eslint-disable no-undef */

/**Fonction pour créer le tableaux des photographes
 * @param {Array} photographers - Tous les photographes
 */
async function displayData(photographers) {
  console.log(photographers);
  const photographersSection = document.querySelector(".photographer_section");

  // Création d'un nouvel objet pour chaque photographe
  photographers.forEach((photographer) => {
    const Template = new PhotographerCard(photographer);
    photographersSection.appendChild(Template.createPhotographerCard());
  });
}

/** FONCTION D INITIATION DE LA PAGE D ACCUEIL */
async function init() {
  //Récupération du fichier Json
  const photographers = await getPhotographers();

  // Création du tableau des photographes
  displayData(photographers);
}

init();

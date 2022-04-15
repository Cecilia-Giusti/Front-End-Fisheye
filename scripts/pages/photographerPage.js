/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */

/**  Fonction pour récupérer l'id du photographe*/
function getPhotographer() {
  // Récupération de l'id du photographe dans la barre de naviguation
  const params = new URLSearchParams(document.location.search);
  const idPhotographerGetString = params.get("id");

  // Transformation en nombre
  if (idPhotographerGetString != "") {
    const idPhotographerGet = Number(idPhotographerGetString);
    return idPhotographerGet;
  } else {
    document.location.href = "../index.html";
  }
}

/** Fonction pour créer la section de présentation du photographe
 * @param {object} photographer - Photographe de la page
 */
function Header(photographer) {
  const photographersHeaderPage = document.querySelector(".photograph-header");
  const template = new PhotographerPageHeader(photographer);
  photographersHeaderPage.appendChild(template.createPhotographerHeaderPage());
}

/**  Fonction principale pour la mise en place de la galerie
 * @param {Array} photographerMedias - Tableau des médias du photographe
 */
function main(photographerMedias) {
  // Création de la galerie
  const gallery = document.querySelector("#section-gallery");
  mediaArray(photographerMedias).forEach((media) => {
    const Template = new MediaCard(media);
    gallery.appendChild(Template.createMediaCard());
  });
}

/**  Fonction pour l'aside - Total des likes
 * @param {object} photographer - Photographe de la page
 */
function aside(photographer) {
  //Envoi des datas au constructor
  const photographerAside = new Aside(photographer);

  //Création du aside
  const photographersAsidePage = document.querySelector("aside");
  const template = new PhotographerPageAside(photographerAside);
  photographersAsidePage.appendChild(template.createPhotographerAsidePage());
}

/** Fonction pour la création d'un filtre pour la galerie
 * @param {array} photographerMedias - Tableau des médias du photographe
 * @param {object} photographer - Photographe de la page
 */
function filter(photographerMedias, photographer) {
  const filter = new Filter(photographerMedias);
  filter.onChangeFilter(photographer);
}

/**  Fonction pour la création de la lightbox
 * @param {array} photographerMedias - Tableau des médias du photographe
 */
function lightbox(photographerMedias) {
  const lightbox = new Lightbox(mediaArray(photographerMedias));
  const galleryLightbox = document.querySelectorAll("#section-gallery .media");

  // Evenements pour l'ouverture de la lightbox
  galleryLightbox.forEach((media) =>
    media.addEventListener("click", (e) => {
      lightbox.show(e.target.dataset.id);
    })
  );

  galleryLightbox.forEach((media) =>
    media.addEventListener("keyup", (e) => {
      if (e.key == "Enter") {
        lightbox.show(e.target.dataset.id);
      }
    })
  );
}

/**  Fonction pour le formulaire de contact
 * @param {object} photographer - Photographe de la page
 */
function contactForm(photographer) {
  const buttonOpen = document.getElementById("contactBtn");
  const buttonClose = document.getElementById("closeContact");

  const contact = new ContactForm(photographer);

  // Ajout d'évenements au click du bouton et de la croix
  buttonOpen.addEventListener("click", function () {
    contact.displayModal();
  });
  buttonClose.addEventListener("click", function (event) {
    contact.closeModal();
    event.preventDefault();
  });

  // Ajout d'un évenement à l'envoi du formulaire
  const form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    contact.showModal();
    contact.closeModal();
  });
}

/**  FONCTION D INITIALISATION DE LA PAGE DES PHOTOGRAPHES */
async function init() {
  // Récupération du fichier Json
  const photographersData = await getPhotographers();
  const mediaData = await getMedias();

  // Récupération de l'indice du photographe
  const indPhotographer = photographersData.findIndex(
    (photographer) => photographer.id == getPhotographer()
  );

  const photographer = photographersData[indPhotographer];

  // Tri des médias par id du photographe
  const params = new URLSearchParams(document.location.search);
  const idPhotographerGetString = params.get("id");
  const idPhotographerGet = Number(idPhotographerGetString);

  //Création d'un tableau avec les médias du photographe
  let photographerMedias = [];

  for (let i = 0; i < mediaData.length; i++) {
    if (mediaData[i].photographerId === idPhotographerGet) {
      photographerMedias.push(mediaData[i]);
    }
  }

  //Header de la page photographe
  Header(photographer);

  //Galerie du photographe
  main(photographerMedias);

  //Aside de la page photographe
  aside(photographer);

  //Filtres
  filter(photographerMedias, photographer);

  // LightBox
  lightbox(photographerMedias);

  // Formulaire de contact
  contactForm(photographer);
}

init();

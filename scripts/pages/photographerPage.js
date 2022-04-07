/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */

// Fonction pour récupérer l'id du photographe
function getPhotographer(photographer) {
  // Récupération de l'id du photographe dans la barre de naviguation
  const params = new URLSearchParams(document.location.search);
  const idPhotographerGetString = params.get("id");

  if (idPhotographerGetString != "") {
    //Transformation de l'id en nombre
    const idPhotographerGet = Number(idPhotographerGetString);
    return photographer.id === idPhotographerGet;
  } else {
    document.location.href = "../index.html";
  }
}

//Fonction pour créer la section de présentation du photographe
function Header(photographer) {
  const photographersHeaderPage = document.querySelector(".photograph-header");
  const template = new PhotographerPageHeader(photographer);
  photographersHeaderPage.appendChild(template.createPhotographerHeaderPage());
}

// Fonction principale pour la mise en place de la galerie
function main(photographerMediasArray) {
  // Création de la galerie
  const gallery = document.querySelector("#section-gallery");
  mediaArray(photographerMediasArray).forEach((media) => {
    const Template = new MediaCard(media);
    gallery.appendChild(Template.createMediaCard());
  });
}

function aside(photographer) {
  //Envoi des datas au constructor
  const photographerAside = new Aside(photographer);

  //Création du aside
  const photographersAsidePage = document.querySelector("aside");
  const template = new PhotographerPageAside(photographerAside);
  photographersAsidePage.appendChild(template.createPhotographerAsidePage());
}

//Fonction pour la création d'un filtre de la galerie
function filter(photographerMediasArray, photographerFind) {
  const filter = new Filter(photographerMediasArray);
  filter.onChangeFilter(photographerFind);
}

// Fonction pour la création de la lightbox
function lightbox(photographerMediasArray) {
  const lightbox = new Lightbox(mediaArray(photographerMediasArray));
  const galleryLightbox = document.querySelectorAll("#section-gallery .media");

  galleryLightbox.forEach((media) =>
    media.addEventListener("click", (e) => {
      lightbox.show(e.target.dataset.id);
    })
  );
}

// Fonction pour le formulaire de contact
function contactForm(photographerFind) {
  const buttonOpen = document.getElementById("contactBtn");
  const buttonClose = document.getElementById("closeContact");

  const contact = new ContactForm(photographerFind);

  // Ajout d'évenements au click du bouton et de la croix
  buttonOpen.addEventListener("click", function () {
    contact.displayModal();
  });
  buttonClose.addEventListener("click", function () {
    contact.closeModal();
  });

  // Ajout d'un évenement à l'envoi du formulaire
  const form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    contact.showModal();
    contact.closeModal();
  });
}

//FONCTION D INITIALISATION DE LA PAGE DES PHOTOGRAPHES
async function init() {
  // Récupération du fichier Json
  const photographersData = await getPhotographers();
  const mediaData = await getMedias();

  // Récupération de l'indice du photographe
  const indPhotographer = photographersData.findIndex(getPhotographer);
  const photographerFind = photographersData[indPhotographer];

  // Tri des médias par id du photographe
  const params = new URLSearchParams(document.location.search);
  const idPhotographerGetString = params.get("id");
  const idPhotographerGet = Number(idPhotographerGetString);

  //Création d'un tableau avec les médias du photographe
  let photographerMediasArray = [];

  for (let i = 0; i < mediaData.length; i++) {
    if (mediaData[i].photographerId === idPhotographerGet) {
      photographerMediasArray.push(mediaData[i]);
    }
  }

  //Header de la page photographe
  Header(photographerFind);

  //Galerie du photographe
  main(photographerMediasArray);

  //Aside de la page photographe
  aside(photographerFind);

  //Filtres
  filter(photographerMediasArray, photographerFind);

  // LightBox
  lightbox(photographerMediasArray);

  // Formulaire de contact
  contactForm(photographerFind);
}

init();

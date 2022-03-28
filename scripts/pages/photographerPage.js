//Fonction pour créer la section de présentation du photographe
function Header(photographerFind) {
  const photographersHeaderPage = document.querySelector(".photograph-header");
  const template = new PhotographerPageHeader(photographerFind);
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

// Fonction principale pour la mise en place de la galerie
async function main(photographerMediasArray) {
  // Ajout d'un type aux médias du photographe
  let photographerMedia = [];
  photographerMediasArray.forEach((media) => {
    if (media.hasOwnProperty("image")) {
      const mediasImg = new MediaFactory(media, "image");
      photographerMedia.push(mediasImg);
    } else if (media.hasOwnProperty("video")) {
      const mediasVideo = new MediaFactory(media, "video");
      photographerMedia.push(mediasVideo);
    } else {
      console.log("error");
    }
  });

  // Création de la galerie
  const gallery = document.querySelector("#section-gallery");

  photographerMedia.forEach((media) => {
    const Template = new MediaCard(media);
    gallery.appendChild(Template.createMediaCard());
  });
}

function footer(photographerFind, photographerMediasArray) {
  //Création d'un tableau avec tous les likes d'un photographe
  let photographerLikes = [];
  for (let i = 0; i < photographerMediasArray.length; i++) {
    photographerLikes.push(photographerMediasArray[i].likes);
  }

  //Envoi des datas au constructor
  const photographerFooter = new Footer(photographerFind, photographerLikes);

  //Création du footer
  const photographersFooterPage = document.querySelector("footer");
  const template = new PhotographerPageFooter(photographerFooter);
  photographersFooterPage.appendChild(template.createPhotographerFooterPage());
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

  //Footer de la page photographe
  footer(photographerFind, photographerMediasArray);
}

init();

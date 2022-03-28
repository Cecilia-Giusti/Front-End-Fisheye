//Fonction pour créer la section de présentation du photographe
function displayDataHeader(photographerFind) {
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
async function main() {
  // Récupération des médias
  const mediaData = await getMedias();

  // Tri des médias par id du photographe
  const params = new URLSearchParams(document.location.search);
  const idPhotographerGetString = params.get("id");
  const idPhotographerGet = Number(idPhotographerGetString);
  console.log(idPhotographerGet);

  let photographerMediasArray = [];

  for (let i = 0; i < mediaData.length; i++) {
    if (mediaData[i].photographerId === idPhotographerGet) {
      photographerMediasArray.push(mediaData[i]);
    }
  }

  console.log(photographerMediasArray);

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

  console.log(photographerMedia);
  // Création de la galerie
  const gallery = document.querySelector("#section-gallery");

  photographerMedia.forEach((media) => {
    const Template = new MediaCard(media);
    gallery.appendChild(Template.createMediaCard());
  });
}

//FONCTION D INITIALISATION DE LA PAGE DES PHOTOGRAPHES
async function init() {
  // Récupération du fichier Json
  const photographers = await getPhotographers();

  // Récupération de l'indice du photographe
  const indPhotographer = photographers.findIndex(getPhotographer);
  const photographerFind = photographers[indPhotographer];

  //Header de la page photographe
  displayDataHeader(photographerFind);

  //Galerie du photographe
  main();
}

init();

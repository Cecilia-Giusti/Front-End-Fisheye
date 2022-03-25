// Fonction pour récuperer les données du json
async function getPhotographers() {
  return fetch("../data/photographers.json")
    .then((file) => file.json())
    .then((data) => data.photographers);
}

async function getMedias() {
  return fetch("../data/photographers.json")
    .then((file) => file.json())
    .then((data) => data.media);
}

// Fonction pour récuperer les données du json
// eslint-disable-next-line no-unused-vars
async function getPhotographers() {
  return fetch("./data/photographers.json")
    .then((file) => file.json())
    .then((data) => data.photographers);
}
// eslint-disable-next-line no-unused-vars
async function getMedias() {
  return fetch("./data/photographers.json")
    .then((file) => file.json())
    .then((data) => data.media);
}

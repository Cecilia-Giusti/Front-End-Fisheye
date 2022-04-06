/* eslint-disable no-unused-vars */

// Fonction pour récuperer les données du json

// Récupération des photographes
async function getPhotographers() {
  return fetch("./data/photographers.json")
    .then((file) => file.json())
    .then((data) => data.photographers);
}

// Récupération des médias
async function getMedias() {
  return fetch("./data/photographers.json")
    .then((file) => file.json())
    .then((data) => data.media);
}

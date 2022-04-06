/* eslint-disable no-unused-vars */

// Classe pour créer une carte dans la page index
class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  // Méthode pour créer une carte de photographe
  createPhotographerCard() {
    const $wrapper = document.createElement("article");
    const picture = `assets/photographers/${this._photographer.portrait}`;

    const photographerCard = `
            <a href="./photographer.html?id=${this._photographer.id}">
              <img class="img_photographer img_photographerIndex--size" src="${picture}" alt="Photo portrait de ${this._photographer.name}"/>
              <div class="photographer-content">
                <h2>${this._photographer.name}</h2>
                <h3>${this._photographer.city}, ${this._photographer.country}</h3>
                <p class="description"> ${this._photographer.tagline}</p>
                <p class="price"> ${this._photographer.price}€/jour</p>
              </div>
            </a>
        `;

    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}

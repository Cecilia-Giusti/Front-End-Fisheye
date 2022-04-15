/* eslint-disable no-unused-vars */

/**  Classe pour créer l'en tête d'une page d'un photographe
 * @constructor
 * @param {object} photographer - Photographe de la page
 */
class PhotographerPageHeader {
  constructor(photographer) {
    this._photographer = photographer;
  }

  /**  Méthode pour créer la section de présentation du photographe*/
  createPhotographerHeaderPage() {
    const $wrapper = document.createElement("article");
    const picture = `assets/photographers/${this._photographer.portrait}`;

    const photographerCard = `
        <div class="photograph-header_presentation"> 
            <h1 tabindex="0">${this._photographer.name}</h1>
            <div role="paragraph" class="photograph-header_content" tabindex="0">
            <h2>${this._photographer.city}, ${this._photographer.country}</h2>
            <p>${this._photographer.tagline}</p>
            </div>
        </div>
        <button id="contactBtn" aria-label="Contact Me" class="contact_button">
            Contactez-moi 
        </button>
        <img tabindex="0" class="img_photographer img_photographerPage--size" src="${picture}" alt="${this._photographer.name}"/>
          `;
    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}

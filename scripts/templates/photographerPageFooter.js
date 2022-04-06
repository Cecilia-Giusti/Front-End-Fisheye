/* eslint-disable no-unused-vars */

// Classe pour créer le pied de page d'un photographe
class PhotographerPageFooter {
  constructor(photographer) {
    this._photographer = photographer;
  }

  // Méthode pour créer le pied de page d'un photographe
  createPhotographerFooterPage() {
    const $wrapper = document.createElement("div");
    $wrapper.setAttribute("class", "footer");

    const photographerCard = `
        <p><span id="totalLike">${this._photographer.totalLikes} </span><i class="fas fa-heart fa-lg"></i> </p>
        <p> ${this._photographer.price}€ / jour</p>
            `;
    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}

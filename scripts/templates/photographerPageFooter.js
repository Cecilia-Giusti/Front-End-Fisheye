// Classe pour créer une page
class PhotographerPageFooter {
  constructor(photographer) {
    this._photographer = photographer;
  }

  // Méthode pour créer la section de présentation du photographe
  createPhotographerFooterPage() {
    const $wrapper = document.createElement("div");
    $wrapper.setAttribute("class", "footer");

    const photographerCard = `
        <p> ${this._photographer.totalLikes} <i class="fas fa-heart fa-lg"></i> </p>
        <p> ${this._photographer.price}€ / jour</p>
            `;
    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}

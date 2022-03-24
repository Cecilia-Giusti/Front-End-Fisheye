// Classe pour créer une carte - Template pattern
class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  // Méthode pour créer une carte de photographe
  createPhotographerCard() {
    const $wrapper = document.createElement("article");
    const picture = `assets/photographers/${this._photographer.portrait}`;

    const photographerCard = `
            <div class="img-content">
                <img src="${picture}" alt="Photo portrait de ${this._photographer.name}"/>
            </div>
            <div class="photographer-content">
            <h1>${this._photographer.name}</h1>
            <h2>${this._photographer.city}, ${this._photographer.country}</h2>
            <p class="description"> ${this._photographer.tagline}</p>
            <p class="price"> ${this._photographer.price}€/jour</p>
            </div>
        `;

    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}

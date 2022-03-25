// Classe pour créer une page
class MediaCard {
  constructor(media) {
    this._media = media;
  }

  // Méthode pour la création d'une carte dans la galerie d'un photographe
  createMediaCard() {
    const $wrapper = document.createElement("article");
    const picture = `assets/photographers/${this._media.image}`;

    const photographerCard = `
          <div class="photograph-header_content">
              <h1>${this._photographer.name}</h1>
              <h2>${this._photographer.city}, ${this._photographer.country}</h2>
              <p>${this._photographer.tagline}</p>
          </div>
          <button class="contact_button" onclick="displayModal()">
              Contactez-moi
          </button>
          <img class="img_photographer img_photographerPage--size" src="${picture}" alt="Photo portrait de ${this._photographer.name}"/>
            `;
    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}

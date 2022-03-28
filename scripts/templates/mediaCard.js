// Classe pour créer une page
class MediaCard {
  constructor(media, likes) {
    this._media = media;
    this._likes = likes;
  }

  // Méthode pour la création d'une carte dans la galerie d'un photographe
  createMediaCard() {
    const $wrapper = document.createElement("article");

    const photographerCard = `
    ${this._media.media}
    <div class="section-gallery_content">
    <h3>${this._media.title}</h3>
    <p>${this._media.likes}  <i class="fas fa-heart fa-lg like-btn"></i></p> 
    </div>
    `;
    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}

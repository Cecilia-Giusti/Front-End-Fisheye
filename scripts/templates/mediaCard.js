/* eslint-disable no-unused-vars */

// Class pour la création des articles avec les médias d'un photographe
class MediaCard {
  constructor(media) {
    this._media = media;
    this._count = media.likes;

    this.$wrapper = document.createElement("article");
  }

  // Gestion des j'aimes
  likeButton() {
    let numberLikes = this._count;

    // Ajout d'un évenement au clic d'un coeur
    this.$wrapper
      .querySelector(".btn_like")
      .addEventListener("click", function () {
        if (this.parentNode.classList.contains("liked")) {
          this.parentNode.classList.remove("liked");
          numberLikes -= 1;
          this.parentNode.querySelector(".like-count").innerHTML = numberLikes;
          return numberLikes;
        } else {
          this.parentNode.classList.add("liked");
          numberLikes += 1;
          this.parentNode.querySelector(".like-count").innerHTML = numberLikes;
          return numberLikes;
        }
      });
  }

  // Méthode pour la création d'une carte dans la galerie d'un photographe
  createMediaCard() {
    const photographerCard = `
    <div class="media ">
    ${this._media.media}
    </div>
    <div class="section-gallery_content">
      <h3 tabindex="0">${this._media.title}</h3>
      <div class="section-gallery_like"> <p class="like-count">${this._count} </p><button class="btn_like" aria-label="likes"> <i class="fas fa-heart fa-lg"></i></button></div> 
    </div>
    `;
    this.$wrapper.innerHTML = photographerCard;
    this.likeButton();
    return this.$wrapper;
  }
}

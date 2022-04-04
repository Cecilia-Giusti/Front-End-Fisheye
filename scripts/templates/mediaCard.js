/* eslint-disable no-unused-vars */

class MediaCard {
  constructor(media) {
    this._media = media;
    this._count = media.likes;

    this.$wrapper = document.createElement("article");
  }

  likeButton() {
    let numberLikes = this._count;

    this.$wrapper
      .querySelector(".like-btn")
      .addEventListener("click", function () {
        if (this.parentNode.classList.contains("liked")) {
          this.parentNode.classList.remove("liked");
          numberLikes -= 1;
          this.parentNode.firstChild.innerHTML = numberLikes;
          return numberLikes;
        } else {
          this.parentNode.classList.add("liked");
          numberLikes += 1;
          this.parentNode.firstChild.innerHTML = numberLikes;
          return numberLikes;
        }
      });
  }

  // Méthode pour la création d'une carte dans la galerie d'un photographe
  createMediaCard() {
    const photographerCard = `
    <div class="media">
    ${this._media.media}
    </div>
    <div class="section-gallery_content">
      <h3>${this._media.title}</h3>
      <p><span class="like-count">${this._count} </span> <i class="fas fa-heart fa-lg like-btn"></i></p> 
    </div>
    `;
    this.$wrapper.innerHTML = photographerCard;
    this.likeButton();
    return this.$wrapper;
  }
}

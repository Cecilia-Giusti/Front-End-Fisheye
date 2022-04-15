/* eslint-disable no-unused-vars */

/**  Class pour la création d'une lightbox
 * @constructor
 * @param {object} media - un média d'un photographe
 */
class LightboxCard {
  constructor(media) {
    this._media = media;
    this.$wrapper = document.createElement("div");
  }

  /**  Création du html de la lightbox */
  createLightboxCard() {
    const lightBoxcard = `
      <div class="lightbox_content--img">
        ${this._media.media}
        <h4 tabindex="0"> ${this._media.title}</h4>
      </div>
      <button aria-label="Previous image" class="btn previous"><i class="fi fi-bs-angle-left"></i></button>
      <button aria-label="Next image" class="btn next"><i class="fi fi-bs-angle-right"></i></button>
      <button aria-label="Close Dialog" class="btn close"><i class="fi fi-bs-cross"></i></button>
        `;
    this.$wrapper.setAttribute("class", "lightbox_content");
    this.$wrapper.setAttribute("role", "document");
    this.$wrapper.innerHTML = lightBoxcard;

    this.$wrapper.querySelector(".lightbox_content--img img");

    return this.$wrapper;
  }
}

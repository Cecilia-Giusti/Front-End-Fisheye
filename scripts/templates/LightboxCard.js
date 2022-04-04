/* eslint-disable no-unused-vars */
class LightboxCard {
  constructor(media) {
    this._media = media;
    this.$wrapper = document.createElement("div");
  }

  createLightboxCard() {
    console.log(this._media);
    const lightBoxcard = `
    <button class="btn previous"><i class="fa-solid fa-angle-left"></i></button>
    <div class="lightbox_content--img">
        ${this._media.media}
        <h4> ${this._media.title}</h4>
        </div>
        <button class="btn next"><i class="fa-solid fa-angle-right"></i></button>
        <button class="btn close"><i class="fa-solid fa-xmark"></i></button>
        `;
    this.$wrapper.setAttribute("class", "lightbox_content");
    this.$wrapper.innerHTML = lightBoxcard;
    return this.$wrapper;
  }
}

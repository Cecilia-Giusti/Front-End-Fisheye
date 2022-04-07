/* eslint-disable no-unused-vars */

//Constructor Pattern - Pour les médias videos
class MediaVideo {
  constructor(data) {
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._media = data.video;
    this._likes = data.likes;
    this._id = data.id;
  }

  get photographerId() {
    return this._photographerId;
  }

  get title() {
    return this._title;
  }

  get media() {
    const video = `
    <video tabindex="0" aria-label="${this._title}, closeup view" data-id="${this._id}">
      <source src="assets/medias/${this._media}" type="video/mp4">
    </video>
    `;
    return video;
  }

  get likes() {
    return this._likes;
  }
}

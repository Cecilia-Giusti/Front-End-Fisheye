class MediaImg {
  constructor(data) {
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._media = data.image;
    this._likes = data.likes;
  }

  get photographerId() {
    return this._photographerId;
  }

  get title() {
    return this._title;
  }

  get media() {
    const picture = `<img src="assets/medias/${this._media}" alt="${this._title}" />`;
    return picture;
  }

  get likes() {
    return this._likes;
  }
}

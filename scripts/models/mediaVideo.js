class MediaVideo {
  constructor(data) {
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._media = data.video;
    this._likes = data.likes;
  }

  get photographerId() {
    return this._photographerId;
  }

  get title() {
    return this._title;
  }

  get media() {
    return this._media;
  }

  get likes() {
    return this._likes;
  }
}

class Footer {
  constructor(photographerFind, photographerLikes) {
    this._price = photographerFind.price;
    this._likes = photographerLikes;
  }

  get totalLikes() {
    let totalLikes = 0;

    for (let i = 0; i < this._likes.length; i++) {
      totalLikes += this._likes[i];
    }
    return totalLikes;
  }

  get price() {
    return this._price;
  }
}

class LikeCounter {
  constructor(media) {
    this._count = media.likes;
  }

  update(action) {
    if (action === "INC") {
      this._count += 1;
    } else if (action === "DEC") {
      this._count -= 1;
    } else {
      throw "Unknow action";
    }
  }
}

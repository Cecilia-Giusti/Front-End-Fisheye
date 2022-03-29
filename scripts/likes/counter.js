class LikeCounter {
  constructor() {
    this._count = 0; // envoyer le bon nombre de like
    this._$likeCount = document.querySelector(".wish-count"); // Mettre le noeud du bon chiffre de like
  }

  update(action) {
    if (action === "INC") {
      this._count += 1;
    } else if (action === "DEC") {
      this._count -= 1;
    } else {
      throw "Unknow action";
    }

    this._$likeCount.innerHTML = this._count;
  }
}

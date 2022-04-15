/* eslint-disable no-unused-vars */

/**Constructor Pattern - Aside
 * @constructor
 * @param {object} photographerFind - Le photographe choisi
 */
class Aside {
  constructor(photographerFind) {
    this._price = photographerFind.price;
    this.$likes = document.getElementsByClassName("like-count");
  }

  get totalLikes() {
    let totalLikes = 0;

    // Récupération du nombre de like
    for (let i = 0; i < this.$likes.length; i++) {
      const likeString = this.$likes[i].outerText;
      const likeNumber = new Number(likeString);
      totalLikes += likeNumber;
    }

    const likes = document.getElementsByClassName("btn_like");

    // Evénement s'il y a un like - Ajout au total de like
    for (let like of likes) {
      like.addEventListener("click", function () {
        const total = document.getElementById("totalLike");

        if (like.parentNode.classList.contains("liked")) {
          totalLikes += 1;
          total.innerHTML = totalLikes;
        } else {
          totalLikes -= 1;
          total.innerHTML = totalLikes;
        }
      });
    }
    return totalLikes;
  }

  get price() {
    return this._price;
  }
}

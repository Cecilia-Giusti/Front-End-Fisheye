/* eslint-disable no-unused-vars */

//Constructor Pattern - Footer
class Footer {
  constructor(photographerFind) {
    this._price = photographerFind.price;
    this.$likes = document.getElementsByClassName("like-count");
  }

  get totalLikes() {
    let totalLikes = 0;

    for (let i = 0; i < this.$likes.length; i++) {
      const likeString = this.$likes[i].outerText;
      const likeNumber = new Number(likeString);
      totalLikes += likeNumber;
    }

    const likes = document.getElementsByClassName("like-btn");

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

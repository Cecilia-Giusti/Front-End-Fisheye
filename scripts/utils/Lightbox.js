/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Lightbox {
  constructor(listElement) {
    this._currentElement = null;
    this._listElement = listElement;

    this.$wrapper = document.querySelectorAll("#section-gallery img");
  }

  next() {
    console.log(this._listElement);
    console.log(this._currentElement);
    let index = this._listElement.findIndex(
      (element) => element._id == this._currentElement._id
    );
    if (index == this._listElement.length - 1) {
      this._currentElement = this._listElement[0];
    } else {
      this._currentElement = this._listElement[index + 1];
    }
    this.remove();
    this.display();
  }

  previous() {
    let index = this._listElement.findIndex(
      (element) => element._id == this._currentElement._id
    );
    if (index == 0) {
      this._currentElement = this._listElement[this._listElement.length - 1];
    } else {
      this._currentElement = this._listElement[index - 1];
    }
    this.remove();
    this.display();
  }

  show(id) {
    this._currentElement = this.getElementById(id);
    this.display();
    this.manageEvent();
  }

  manageEvent() {
    document.querySelector(".next").addEventListener("click", () => {
      this.next();
    });
    document.querySelector(".previous").addEventListener("click", () => {
      this.previous();
    });

    document.querySelector(".close").addEventListener("click", () => {
      this.close();
    });
  }

  getElementById(id) {
    return this._listElement.find((element) => element._id == id);
  }

  display() {
    const lightbox = new LightboxCard(this._currentElement);

    const sectionLightbox = document.querySelector("#lightbox");
    sectionLightbox.setAttribute("class", "display-flex");
    sectionLightbox.appendChild(lightbox.createLightboxCard());
    this.manageEvent();

    if (document.querySelector(".lightbox_content--img video")) {
      document
        .querySelector(".lightbox_content--img video")
        .setAttribute("controls", "");
    }
  }

  close() {
    this.remove();
    document.querySelector("#lightbox").setAttribute("class", "display-none");
  }

  remove() {
    document.querySelector(".lightbox_content").remove();
  }
}

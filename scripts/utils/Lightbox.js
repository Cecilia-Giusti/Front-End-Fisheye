/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Lightbox {
  constructor(listElement) {
    this._currentElement = null;
    this._listElement = listElement;

    this.$wrapper = document.querySelectorAll("#section-gallery img");
    this.$next = document.querySelector(".next");
    this.$previous = document.querySelector(".previous");
  }

  next() {}

  previous() {}

  show(id) {
    console.log(id);

    this._currentElement = this.getElementById(id);
    console.log("******");
    console.log(this._currentElement);
    console.log("******");
    const lightbox = new LightboxCard(this._currentElement);
    const sectionLightbox = document.querySelector("#lightbox");
    sectionLightbox.setAttribute("class", "display-flex");
    sectionLightbox.appendChild(lightbox.createLightboxCard());
  }

  manageEvent() {
    // this.$next.addEventListener("click", (e) => {
    //   this.next();
    // });
    // this.$previous.addEventListener("click", (e) => {
    //   this.previous;
    // });
  }

  getElementById(id) {
    console.log("$$$$$$");
    console.log(this._listElement);
    console.log("$$$$$$");
    return this._listElement.find((element) => element._id == id);
  }
}

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Class pour la création de la lightbox
class Lightbox {
  constructor(listElement) {
    this._currentElement = null;
    this._listElement = listElement;

    this.$wrapper = document.querySelectorAll("#section-gallery img");
  }

  // Affichage du média suivant
  next() {
    let index = this._listElement.findIndex(
      (element) => element._id == this._currentElement._id
    );
    console.log(index);
    if (index == this._listElement.length - 1) {
      this._currentElement = this._listElement[0];
    } else {
      this._currentElement = this._listElement[index + 1];
    }
    this.remove();
    this.display();
  }
  // Affichage du média précédent
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

  // Affichage du média sélectionné
  show(id) {
    this._currentElement = this.getElementById(id);
    this.display();
  }

  // Gestion des clics, des flèches, suivant, précédent et fermeture
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

    // Gestion des flèches du clavier
    document
      .querySelector(".lightbox_content")
      .addEventListener("keyup", (e) => {
        console.log(e.key);
        switch (e.key) {
          case "ArrowRight":
            this.next();
            break;
          case "ArrowLeft":
            this.previous();
            break;
          case "Escape":
            this.close();
            break;
        }
      });
  }

  // Récupération de l'id du média et de l'image courante
  getElementById(id) {
    return this._listElement.find((element) => element._id == id);
  }

  // Création de la lightbox avec les données du média
  display() {
    const lightbox = new LightboxCard(this._currentElement);

    const sectionLightbox = document.querySelector("#lightbox");
    sectionLightbox.setAttribute("class", "display-flex");
    sectionLightbox.appendChild(lightbox.createLightboxCard());

    // Gestion des évenements
    this.manageEvent();

    // Gestion de l'accessibilité
    document.querySelector(".lightbox_content").setAttribute("tabindex", "-1");
    document.querySelector(".lightbox_content").setAttribute("role", "dialog");
    document
      .querySelector(".lightbox_content")
      .setAttribute("aria-label", "image closeup view");
    document.querySelector(".lightbox_content").focus();

    document.querySelector(".lightbox_content--img img").removeAttribute("alt");

    document
      .querySelector(".lightbox_content--img img")
      .setAttribute("alt", `${this._currentElement._title}`);

    //Gestion des médias videos
    if (document.querySelector(".lightbox_content--img video")) {
      document
        .querySelector(".lightbox_content--img video")
        .setAttribute("controls", "");
    }

    //Focus pour l'accessibilité
    sectionLightbox.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "Tab":
          document.querySelector(".lightbox_content--img").focus();
          break;
        case "Escape":
          this.close();
          break;
      }
    });
  }
  // Méthodes pour la fermeture de la lightbox
  close() {
    this.remove();
    document.querySelector("#lightbox").setAttribute("class", "display-none");
    this.$wrapper.focus();
  }

  remove() {
    document.querySelector(".lightbox_content").remove();
  }
}

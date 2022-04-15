/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**  Class pour la création de la lightbox
 * @constructor
 * @param {Array} photographerMedia - Tableau des médias
 */
class Lightbox {
  constructor(photographerMedia) {
    this._currentElement = null;
    this._photographerMedia = photographerMedia;
    this.$wrapper = document.querySelectorAll("#section-gallery img");
  }

  /**  Méthode pour l'affichage du média suivant*/
  next() {
    let index = this._photographerMedia.findIndex(
      (element) => element._id == this._currentElement._id
    );

    if (index == this._photographerMedia.length - 1) {
      this._currentElement = this._photographerMedia[0];
    } else {
      this._currentElement = this._photographerMedia[index + 1];
    }
    this.remove();
    this.display();
  }
  /** Méthode pour l'affichage du média précédent */
  previous() {
    let index = this._photographerMedia.findIndex(
      (element) => element._id == this._currentElement._id
    );
    if (index == 0) {
      this._currentElement =
        this._photographerMedia[this._photographerMedia.length - 1];
    } else {
      this._currentElement = this._photographerMedia[index - 1];
    }
    this.remove();
    this.display();
  }

  /**  Méthode pour l'affichage du média sélectionné
   * @param {string} id - Identifiant du média
   */
  show(id) {
    this._currentElement = this.getElementById(id);
    this.display();
  }

  /** Méthode pour gérer les clics, les flèches, suivant, précédent et fermeture */
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
          case "Tab":
            document.querySelector(".lightbox_content--img").focus();
            break;
        }
      });
  }

  /**  Méthode pour récupérer l'id du média et l'image courante
   *  @param {string} id - Identifiant du média
   */
  getElementById(id) {
    return this._photographerMedia.find((element) => element._id == id);
  }

  /**  Méthode pour la création de la lightbox avec les données du média*/
  display() {
    const lightbox = new LightboxCard(this._currentElement);

    const sectionLightbox = document.querySelector("#lightbox");
    sectionLightbox.setAttribute("class", "display-flex");
    sectionLightbox.appendChild(lightbox.createLightboxCard());

    // Gestion des évenements
    this.manageEvent();

    // Gestion de l'accessibilité
    document
      .querySelector("#section-gallery")
      .setAttribute("aria-hidden", "true");
    document
      .querySelector("#section-header")
      .setAttribute("aria-hidden", "true");
    document.querySelector("aside").setAttribute("aria-hidden", "true");
    document.querySelector(".lightbox_content").setAttribute("tabindex", "-1");
    document.querySelector(".lightbox_content").setAttribute("role", "dialog");
    document
      .querySelector(".lightbox_content")
      .setAttribute("aria-label", "image closeup view");
    document.querySelector(".lightbox_content").focus();

    // Pour les images
    if (document.querySelector(".lightbox_content--img img")) {
      document
        .querySelector(".lightbox_content--img img")
        .setAttribute("alt", `${this._currentElement._title}`);
    }

    //Pour les vidéos
    if (document.querySelector(".lightbox_content--img video")) {
      document
        .querySelector(".lightbox_content--img video")
        .setAttribute("controls", "");
    }
  }

  /**  Méthodes pour la fermeture de la lightbox*/
  close() {
    this.remove();
    document.querySelector("#section-gallery").removeAttribute("aria-hidden");
    document.querySelector("#section-header").removeAttribute("aria-hidden");
    document.querySelector("aside").removeAttribute("aria-hidden");
    document.querySelector("#lightbox").setAttribute("class", "display-none");
  }

  /**  Méthodes pour la réinitialisation de la lightbox*/
  remove() {
    document.querySelector(".lightbox_content").remove();
  }
}

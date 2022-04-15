/* eslint-disable no-unused-vars */

/**  Class pour la création de la modale du formulaire de contact
 * @constructor
 * @param {object} photographer - Photographe de la page
 */
class ContactForm {
  constructor(photographer) {
    this._name = photographer.name;
    this._id = photographer.id;
    this.$modal = document.getElementById("contact_modal");
    this.$nameContact = document.querySelector(".modal header h2");
    this.$form = document.getElementById("form");
    this.$body = document.querySelector("body");
    this.$buttonOpen = document.getElementById("contactBtn");
  }

  /**  Ouverture de la modale*/
  displayModal() {
    // Reset de la modale
    this.resetModal();

    // Récupération et ajout du nom du photographe
    this.$form.setAttribute("action", `/photographer.html?id=${this._id}&`);
    const contactName = `<p class="contactName"> ${this._name}</p>`;
    this.$nameContact.insertAdjacentHTML("afterend", contactName);

    // Ouverture
    this.$modal.setAttribute("class", "display-flex");
    this.$modal.setAttribute("aria-labelledby", `Contact me ${this._name}`);
    this.$body.setAttribute("class", "no-scroll");
    this.$modal.focus();

    //Focus pour l'accessibilité
    this.$modal.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "Tab":
          this.$nameContact.focus();
          break;
        case "Escape":
          this.closeModal();
          break;
      }
    });
  }

  /**  Fermeture de la modale */
  closeModal() {
    const contactName = document.querySelector(".contactName ");
    contactName.remove();
    this.$modal.setAttribute("class", "display-none");
    this.$body.removeAttribute("class", "no-scroll");
    this.$buttonOpen.focus();
  }

  /**  Réinitialisation de la modale*/
  resetModal() {
    this.$form.reset();
  }

  /**  Récupération des données de la modale en les montrant dans la console*/
  showModal() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (firstname != "" && lastname != "" && email != "" && message != "") {
      console.log(firstname);
      console.log(lastname);
      console.log(email);
      console.log(message);
    } else {
      console.log("Les champs ne sont pas tous remplis");
    }
  }
}

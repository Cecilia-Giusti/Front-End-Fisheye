/* eslint-disable no-unused-vars */

// Class pour la création de la modale du formulaire de contact
class ContactForm {
  constructor(photographer) {
    this._name = photographer.name;
    this._id = photographer.id;
    this.$modal = document.getElementById("contact_modal");
    this.$nameContact = document.querySelector(".modal_title");
    this.$form = document.getElementById("form");
  }

  // Ouverture de la modale
  displayModal() {
    this.resetModal();
    this.$form.setAttribute("action", `/photographer.html?id=${this._id}&`);
    const contactName = `<p class="contactName"> ${this._name}</p>`;
    this.$nameContact.insertAdjacentHTML("afterend", contactName);
    this.$modal.setAttribute("class", "display-flex");
  }

  // Fermeture de la modale
  closeModal() {
    const contactName = document.querySelector("p.contactName");
    contactName.remove();
    this.$modal.setAttribute("class", "display-none");
  }

  // Réinitialisation de la modale
  resetModal() {
    this.$form.reset();
  }

  // Récupération des données de la modale en les montrant dans la console
  showModal() {
    const first = document.getElementById("first").value;
    const last = document.getElementById("last").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (first != "" && last != "" && email != "" && message != "") {
      console.log(first);
      console.log(last);
      console.log(email);
      console.log(message);
    } else {
      console.error("error");
    }
  }
}

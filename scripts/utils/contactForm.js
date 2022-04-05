/* eslint-disable no-unused-vars */
class ContactForm {
  constructor(photographer) {
    this._name = photographer.name;
    this._id = photographer.id;
    this.$modal = document.getElementById("contact_modal");
    this.$nameContact = document.querySelector(".modal_title");
    this.$form = document.getElementById("form");
  }

  displayModal() {
    this.resetModal();
    this.$form.setAttribute("action", `/photographer.html?id=${this._id}&`);
    const contactName = `<p class="contactName"> ${this._name}</p>`;
    this.$nameContact.insertAdjacentHTML("afterend", contactName);
    this.$modal.setAttribute("class", "display-flex");
  }

  closeModal() {
    const contactName = document.querySelector("p.contactName");
    contactName.remove();
    this.$modal.setAttribute("class", "display-none");
  }

  resetModal() {
    this.$form.reset();
  }

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

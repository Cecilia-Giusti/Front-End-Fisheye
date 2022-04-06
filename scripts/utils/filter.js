/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

//Class pour la création des filtres de la galerie
class Filter {
  constructor(media) {
    this._media = media;
    this._$wrapper = document.getElementById("filters");
    this.$mmainWrapper = document.getElementById("section-gallery");
  }

  // Réinitialisation de la galerie
  clearMainWrapper() {
    this.$mmainWrapper.innerHTML = "";
  }

  // Récupération de la selection du filtre
  filter(select, photographerFind) {
    this.clearMainWrapper();

    // Envoi des médias dans le bon classement
    const filter = new SelectFilter(this._media);
    switch (select) {
      case "date":
        filter.dateFilter();
        break;
      case "popularité":
        filter.popularFilter();
        break;
      case "Titre":
        filter.titleFilter();
        break;
    }
    main(filter._media);
    footer(photographerFind);
    lightbox(filter._media);
  }

  // Ajout d'un évenement lors du changement du filtre
  onChangeFilter(photographerFind) {
    this._$wrapper.querySelector("form").addEventListener("change", (e) => {
      const select = e.target.value;
      this.filter(select, photographerFind);
    });
  }
}

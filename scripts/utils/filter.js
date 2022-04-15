/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/** Class pour la création des filtres de la galerie
 * @constructor
 * @param {Array} media - Tableau des médias du photographe de la page
 */
class Filter {
  constructor(media) {
    this._media = media;
    this.$wrapper = document.getElementById("filters");
    this.$mmainWrapper = document.getElementById("section-gallery");
  }

  /**  Réinitialisation de la galerie*/
  clearMainWrapper() {
    this.$mmainWrapper.innerHTML = "";
  }

  /**  Méthode pour récupérer la selection du filtre
   * @param {string} select - Selection du "Trier par"
   * @param {object} photographer - Photographe de la page
   */
  filter(select, photographer) {
    this.clearMainWrapper();
    console.log(photographer);

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
    document.querySelector("aside .aside").remove();
    aside(photographer);
    lightbox(filter._media);
  }

  /**  Ajout d'un évenement lors du changement du filtre
   * @param {object} photographer - Photographe de la page
   */
  onChangeFilter(photographer) {
    this.$wrapper.querySelector("form").addEventListener("change", (e) => {
      const select = e.target.value;
      this.filter(select, photographer);
    });
  }
}

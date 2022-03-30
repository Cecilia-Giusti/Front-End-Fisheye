/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Filter {
  constructor(media) {
    this._media = media;
    this._$wrapper = document.getElementById("filters");
    this.$mmainWrapper = document.getElementById("section-gallery");
  }

  clearMainWrapper() {
    this.$mmainWrapper.innerHTML = "";
  }

  filter(select) {
    this.clearMainWrapper();

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
  }

  onChangeFilter() {
    this._$wrapper.querySelector("form").addEventListener("change", (e) => {
      const select = e.target.value;
      this.filter(select);
    });
  }
}

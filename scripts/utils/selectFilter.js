/* eslint-disable no-unused-vars */

/** Class pour le classement des médias en fonction du filtre sélectionné
 * @constructor
 * @param {Array} media - Tableau des médias du photographe de la page
 */
class SelectFilter {
  constructor(media) {
    this._media = media;
  }

  dateFilter() {
    const dateFilter = this._media.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    return dateFilter;
  }

  popularFilter() {
    const popularFilter = this._media.sort(function (a, b) {
      return b.likes - a.likes;
    });

    return popularFilter;
  }

  titleFilter() {
    const titleFilter = this._media.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });

    return titleFilter;
  }
}

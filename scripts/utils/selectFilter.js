/* eslint-disable no-unused-vars */
class SelectFilter {
  constructor(media) {
    this._media = media;
  }

  dateFilter() {
    const dateFilter = this._media.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    console.log(dateFilter);
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

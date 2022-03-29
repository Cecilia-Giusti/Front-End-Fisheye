/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class MediaFactory {
  constructor(data, type) {
    // Si le type correspond à une image
    if (type === "image") {
      return new MediaImg(data);
      // Si le type correspond à une video
    } else if (type === "video") {
      return new MediaVideo(data);
    } else {
      throw "Unknown type format";
    }
  }
}

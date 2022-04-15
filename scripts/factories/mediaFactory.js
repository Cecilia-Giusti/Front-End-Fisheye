/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/** Factory Pattern
 * @constructor
 * @param {object} data - Un objet média
 * @param {string} type - Le type du média
 */
class MediaFactory {
  constructor(data, type) {
    if (type === "image") {
      return new MediaImg(data);
    } else if (type === "video") {
      return new MediaVideo(data);
    } else {
      throw "Unknown type format";
    }
  }
}

/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Outils

// Ajout d'un type aux médias d'un photographe
function mediaArray(photographerMediasArray) {
  let photographerMedia = [];
  photographerMediasArray.forEach((media) => {
    if (media.hasOwnProperty("image")) {
      const mediasImg = new MediaFactory(media, "image");
      photographerMedia.push(mediasImg);
    } else if (media.hasOwnProperty("video")) {
      const mediasVideo = new MediaFactory(media, "video");
      photographerMedia.push(mediasVideo);
    } else {
      console.error("error");
    }
  });
  return photographerMedia;
}

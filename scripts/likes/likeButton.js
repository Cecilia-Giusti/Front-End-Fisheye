function likesButton(like) {
  if (like.parentNode.classList.contains("liked")) {
    like.parentNode.classList.remove("liked");
    // like.LikesSubject.fire("DEC");
  } else {
    like.parentNode.classList.add("liked");
    // like.LikesSubject.fire("INC");
  }
}

class LikeSubject {
  constructor() {
    this._observers = [];
  }

  like(observer) {
    this._observers.push(observer);
  }

  dislike(observer) {
    this._observers = this._observers.filter((obs) => obs !== observer);
  }

  fire(action) {
    this._observers.forEach((observer) => observer.update(action));
  }
}

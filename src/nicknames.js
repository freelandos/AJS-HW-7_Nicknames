export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    const re1 = /^([a-z_-]\d{0,3})+$/i;

    if (re1.test(this.username)) {
      const re2 = /(^[^\d_-]).+([^\d_-]$)/;

      if (re2.test(this.username)) {
        return true;
      }
    }

    return false;
  }
}

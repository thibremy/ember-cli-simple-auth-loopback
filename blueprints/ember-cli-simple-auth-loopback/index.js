module.exports = {
  normalizeEntityName() {
  },

  afterInstall() {
    return this.addBowerPackageToProject('ember-simple-auth', '0.8.0');
  }
};
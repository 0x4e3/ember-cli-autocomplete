module.exports = {
  normalizeEntityName: function() {},
  afterInstall: function() {
    return this.addBowerPackageToProject([
      {name: 'devbridge-autocomplete'},
      {name: 'bootstrap-less'}
    ]);
  }
}
